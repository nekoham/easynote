import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Note } from "./Note";

@Index("username", ["username"], { unique: true })
@Entity("customer", { schema: "easynote" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "int", name: "customerId" })
  customerId: number;

  @Column("varchar", { name: "username", unique: true, length: 20 })
  username: string;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @CreateDateColumn({ name: "createdDate" })
  createdDate: Date;

  @OneToMany(() => Note, (note) => note.customer)
  notes: Note[];
}
