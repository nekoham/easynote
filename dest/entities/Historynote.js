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
exports.Historynote = void 0;
var typeorm_1 = require("typeorm");
var Note_1 = require("./Note");
var Historynote = /** @class */ (function () {
    function Historynote() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "historyId" }),
        __metadata("design:type", Number)
    ], Historynote.prototype, "historyId", void 0);
    __decorate([
        (0, typeorm_1.Column)("text", { name: "previousData", nullable: true }),
        __metadata("design:type", String)
    ], Historynote.prototype, "previousData", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "modifiedDate" }),
        __metadata("design:type", Date)
    ], Historynote.prototype, "modifiedDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "noteId", nullable: true }),
        __metadata("design:type", Number)
    ], Historynote.prototype, "noteId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Note_1.Note; }, function (note) { return note.historynotes; }, {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "noteId", referencedColumnName: "noteId" }]),
        __metadata("design:type", Note_1.Note)
    ], Historynote.prototype, "note", void 0);
    Historynote = __decorate([
        (0, typeorm_1.Index)("noteId", ["noteId"], {}),
        (0, typeorm_1.Entity)("historynote", { schema: "easynote" })
    ], Historynote);
    return Historynote;
}());
exports.Historynote = Historynote;
//# sourceMappingURL=Historynote.js.map