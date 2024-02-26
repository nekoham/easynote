"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Categorynote_1 = require("./entities/Categorynote");
var Customer_1 = require("./entities/Customer");
var Historynote_1 = require("./entities/Historynote");
var Note_1 = require("./entities/Note");
var noteSub_1 = require("./subscriber/noteSub");
var categorySub_1 = require("./subscriber/categorySub");
var customerSub_1 = require("./subscriber/customerSub");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin1",
    database: "easynotetest",
    synchronize: false,
    logging: true,
    entities: [Categorynote_1.Categorynote, Customer_1.Customer, Historynote_1.Historynote, Note_1.Note],
    migrations: [],
    subscribers: [noteSub_1.noteSubscriber, categorySub_1.categorySubscriber, customerSub_1.customerSubscriber],
});
//# sourceMappingURL=data-source.js.map