"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
var typeorm_1 = require("typeorm");
var Historynote_1 = require("./Historynote");
var Customer_1 = require("./Customer");
var Categorynote_1 = require("./Categorynote");
var Note = /** @class */ (function () {
    function Note() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "noteId" }),
        __metadata("design:type", Number)
    ], Note.prototype, "noteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "name", length: 20 }),
        __metadata("design:type", String)
    ], Note.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("text", { name: "data", nullable: true }),
        __metadata("design:type", String)
    ], Note.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)("simple-array", { name: "tags", nullable: true }),
        __metadata("design:type", Array)
    ], Note.prototype, "tags", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "createdDate" }),
        __metadata("design:type", Date)
    ], Note.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "customerId", nullable: true }),
        __metadata("design:type", Number)
    ], Note.prototype, "customerId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "categoryId", nullable: true }),
        __metadata("design:type", Number)
    ], Note.prototype, "categoryId", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Historynote_1.Historynote; }, function (historynote) { return historynote.note; }),
        __metadata("design:type", Array)
    ], Note.prototype, "historynotes", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Customer_1.Customer; }, function (customer) { return customer.notes; }, {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "customerId", referencedColumnName: "customerId" }]),
        __metadata("design:type", Customer_1.Customer)
    ], Note.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Categorynote_1.Categorynote; }, function (categorynote) { return categorynote.notes; }, {
            onDelete: "SET NULL",
            onUpdate: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "categoryId", referencedColumnName: "categoryId" }]),
        __metadata("design:type", Categorynote_1.Categorynote)
    ], Note.prototype, "category", void 0);
    Note = __decorate([
        (0, typeorm_1.Index)("customerId", ["customerId"], {}),
        (0, typeorm_1.Index)("categoryId", ["categoryId"], {}),
        (0, typeorm_1.Entity)("note", { schema: "easynote" })
    ], Note);
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=Note.js.map