import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Note } from "./Note";

@Index("categoryName", ["categoryName"], { unique: true })

@Entity("Categorynote", { schema: "easynote" })
export class Categorynote {
  @PrimaryGeneratedColumn({ type: "int", name: "categoryId" })
  categoryId: number;

  @Column("varchar", { name: "categoryName", unique: true, length: 20 })
  categoryName: string;

  @OneToMany(() => Note, (note) => note.category)
  notes: Note[];
}
