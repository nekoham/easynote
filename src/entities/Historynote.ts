import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Note } from "./Note";

@Index("noteId", ["noteId"], {})
@Entity("historynote", { schema: "easynote" })
export class Historynote {
  @PrimaryGeneratedColumn({ type: "int", name: "historyId" })
  historyId: number;

  @Column("text", { name: "previousData", nullable: true })
  previousData: string | null;

  @CreateDateColumn({ name: "modifiedDate" })
  modifiedDate: Date;

  @Column("int", { name: "noteId", nullable: true })
  noteId: number | null;

  @ManyToOne(() => Note, (note) => note.historynotes, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "noteId", referencedColumnName: "noteId" }])
  note: Note;
}
