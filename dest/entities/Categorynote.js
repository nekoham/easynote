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
exports.Categorynote = void 0;
var typeorm_1 = require("typeorm");
var Note_1 = require("./Note");
var Categorynote = /** @class */ (function () {
    function Categorynote() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "categoryId" }),
        __metadata("design:type", Number)
    ], Categorynote.prototype, "categoryId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "categoryName", unique: true, length: 20 }),
        __metadata("design:type", String)
    ], Categorynote.prototype, "categoryName", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Note_1.Note; }, function (note) { return note.category; }),
        __metadata("design:type", Array)
    ], Categorynote.prototype, "notes", void 0);
    Categorynote = __decorate([
        (0, typeorm_1.Index)("categoryName", ["categoryName"], { unique: true }),
        (0, typeorm_1.Entity)("Categorynote", { schema: "easynote" })
    ], Categorynote);
    return Categorynote;
}());
exports.Categorynote = Categorynote;
//# sourceMappingURL=Categorynote.js.map