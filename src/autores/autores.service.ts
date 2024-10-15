import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Autore } from './entities/autore.entity';

@Injectable()
export class AutoresService {

  constructor(
    @InjectRepository(Autore)
    private autoreRepository: Repository<Autore>,
  ) { }

  create(createAutoreDto: CreateAutoreDto) {
    const autor = new Autore();
    autor.name = createAutoreDto.name;
    autor.nationality = createAutoreDto.nationality;
    autor.birth_date = createAutoreDto.birth_date;
    // autor.name=createAutoreDto.name;
    // autor.name=createAutoreDto.name;
    return this.autoreRepository.save(autor);
  }

  findAll(): Promise<Autore[]> {
    return this.autoreRepository.find();
  }

  findOne(id: number) {
    return this.autoreRepository.findOneBy({ id });
  }

  async update(id: number, updateAutoreDto: UpdateAutoreDto) {
    const autor = await this.autoreRepository.findOneBy({ id });
    if (!autor) {
      throw new NotFoundException('El autor no existe');
    }

    autor.name = updateAutoreDto.name;
    autor.nationality = updateAutoreDto.nationality;
    autor.birth_date = updateAutoreDto.birth_date;
    return this.autoreRepository.save(autor);
  }

  async remove(id: number) {
    const autor = await this.autoreRepository.findOneBy({ id });
    if (!autor) {
      throw new NotFoundException('El autor no existe');
    }
    await this.autoreRepository.delete(autor.id);
    return autor;

  }

}
