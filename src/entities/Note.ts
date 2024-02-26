import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { Historynote } from "./Historynote";
import { Customer } from "./Customer";
import { Categorynote } from "./Categorynote";


@Index("customerId", ["customerId"], {})
@Index("categoryId", ["categoryId"], {})
@Entity("note", { schema: "easynote" })
export class Note {
  @PrimaryGeneratedColumn({ type: "int", name: "noteId" })
  noteId: number;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("text", { name: "data", nullable: true })
  data: string | null;

  @Column("simple-array", { name: "tags", nullable: true})
  tags: string[] | null;

  @CreateDateColumn({ name: "createdDate" })
  createdDate: Date;

  @Column("int", { name: "customerId", nullable: true })
  customerId: number | null;

  @Column("int", { name: "categoryId", nullable: true })
  categoryId: number | null;

  @OneToMany(() => Historynote, (historynote) => historynote.note)
  historynotes: Historynote[];

  @ManyToOne(() => Customer, (customer) => customer.notes, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "customerId", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Categorynote, (categorynote) => categorynote.notes, {
    onDelete: "SET NULL",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "categoryId", referencedColumnName: "categoryId" }])
  category: Categorynote;
}

