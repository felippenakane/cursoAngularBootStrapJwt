"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.mostraIdade = function (age) {
        console.log(this.name + " tem " + age + " anos de idade");
    };
    Person.prototype.toString = function () {
        return "Classe Person, o nome " + this.name + " foi inserido na base";
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map