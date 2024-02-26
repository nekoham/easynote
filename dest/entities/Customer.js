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
exports.Customer = void 0;
var typeorm_1 = require("typeorm");
var Note_1 = require("./Note");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "customerId" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "customerId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "username", unique: true, length: 20 }),
        __metadata("design:type", String)
    ], Customer.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "password", length: 20 }),
        __metadata("design:type", String)
    ], Customer.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "createdDate" }),
        __metadata("design:type", Date)
    ], Customer.prototype, "createdDate", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Note_1.Note; }, function (note) { return note.customer; }),
        __metadata("design:type", Array)
    ], Customer.prototype, "notes", void 0);
    Customer = __decorate([
        (0, typeorm_1.Index)("username", ["username"], { unique: true }),
        (0, typeorm_1.Entity)("customer", { schema: "easynote" })
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map