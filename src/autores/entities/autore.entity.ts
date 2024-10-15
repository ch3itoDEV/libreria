
import { Libro } from "src/libros/entities/libro.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity('Autores')
export class Autore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    nationality: string;

    @Column({ type: 'date' })
    birth_date: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone', select: false })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone', select: false, nullable: true })
    updatedAt: Date;


}
