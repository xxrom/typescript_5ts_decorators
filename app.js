var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// Factory // разница только в том, что в factory можно передать параметры
// но вроде как нужно обратно вернуть обязательно декоратор или null
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
// plant.print(); // error print didn't exist, ts bugs
plant.print();
plant.print2();
// Method Decorator
// Property decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    // @editable(false)
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false) // false ничего нельзя заменить в классе и он пустой будет
    ], Project.prototype, "projectName");
    return Project;
}());
var project = new Project("super project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumber = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumber");
    return Course;
}());
var course = new Course('Super course');
course.printStudentNumber('anything', true);
course.printStudentNumber('anything', false);
