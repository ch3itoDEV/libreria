import { ConflictException, Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Libro } from './entities/Libro.entity';

@Injectable()
export class LibrosService {

  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
  ) { }

  create(createLibroDto: CreateLibroDto) {
    const libro = new Libro();
    libro.title = createLibroDto.title;
    libro.isbn = createLibroDto.isbn;
    libro.publisher = createLibroDto.publisher;
    libro.publication_year = createLibroDto.publication_year;
    libro.genre = createLibroDto.genre;
    libro.autor_id = createLibroDto.author_id;
    return this.libroRepository.save(libro);
  }

  findAll(): Promise<Libro[]> {
    return this.libroRepository.find();
  }

  findOne(id: number) {
    return this.libroRepository.findOneBy({ id });
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
    const libro = await this.libroRepository.findOneBy({ id });
    if (!libro) {
      throw new ConflictException('El libro no existe');
    }

    libro.title = updateLibroDto.title;
    libro.isbn = updateLibroDto.isbn;
    libro.publisher = updateLibroDto.publisher;
    libro.publication_year = updateLibroDto.publication_year;
    libro.genre = updateLibroDto.genre;
    libro.autor_id = updateLibroDto.author_id;
    return this.libroRepository.save(libro);
  }

  async remove(id: number) {
    const libro = await this.libroRepository.findOneBy({ id });
    if (!libro) {
      throw new ConflictException('El libro no existe');
    }
    await this.libroRepository.delete(libro.id);
    return libro;  }
}
