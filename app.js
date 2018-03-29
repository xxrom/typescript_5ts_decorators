var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(consctructionFn) {
    console.log(consctructionFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// Advanced
function printable(consturctorFn) {
    consturctorFn.prototype.print = function () {
        console.log(this);
        this.test = 'test';
    };
}
function printable2(consctructionFn) {
    consctructionFn.prototype.print2 = function () {
        console.log('hello print2', this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green';
    }
    Plant = __decorate([
        printable,
        printable2
    ], Plant);
    return Plant;
}());
var plant = new Plant();
// plant.print(); // error print didn't exist
plant.print();
plant.print2();
