import { Autore } from "src/autores/entities/autore.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity('Libros')
export class Libro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 20, unique: true })
    isbn: string;

    @Column({ type: 'varchar', length: 255 })
    publisher: string;

    @Column({ type: 'int' })
    publication_year: number;

    @Column({ type: 'varchar', length: 100 })
    genre: string;

    @Column({ name: 'autor_id', type: 'integer' })
    autor_id: number;

    @ManyToOne(() => Autore, (autore) => autore.id)
    @JoinColumn([{ name: 'autor_id', referencedColumnName: 'id' }])
    category: Autore;
}
