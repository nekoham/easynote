import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categorynote } from "./entities/Categorynote"
import { Customer } from "./entities/Customer"
import { Historynote } from "./entities/Historynote"
import { Note } from "./entities/Note"
import { noteSubscriber } from "./subscriber/noteSub"
import { categorySubscriber } from "./subscriber/categorySub"
import { customerSubscriber } from "./subscriber/customerSub"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin1",
    database: "notedb",
    synchronize: false,
    logging: true,
    entities: [Categorynote, Customer, Historynote, Note],
    migrations: [],
    subscribers: [noteSubscriber, categorySubscriber, customerSubscriber],
})
