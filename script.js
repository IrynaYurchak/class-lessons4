// Task1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }
    static sumSalary(worker1, worker2) {
        return worker1.getSalary() + worker2.getSalary();
    }
}

const worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
const worker2 = new Worker('Petro', 'Petriv', 18, 22);
console.log(`Salary worker1: ${worker1.getSalary()} $`);
console.log(`Salary worker2: ${worker2.getSalary()} $`);
console.log(`sumSalary: ${Worker.sumSalary(worker1, worker2)} $`)

// Task2

class MyString {
    constructor() {}
    reverse(word) {
        return word.split('').reverse().join('');
    }

    ucFirst(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    ucWords(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

const str = new MyString();
console.log(str.ucFirst('hello')); 
console.log(str.reverse('coffee')); 
console.log(str.ucWords('coffee coffee coffee coffee coffee')); 

// Task3

class CoffeeMake {
    on() {
        console.log("The coffee maker is on");
    }

    off() {
        console.log("The coffee maker is off");
    }
}

class DripCoffeeMaker extends CoffeeMake {
    brew() {
        console.log("Brewing drip coffee");
    }
}

class EspressoMachine extends CoffeeMake {
    brew() {
        console.log("Brewing espresso");
    }
}

class CoffeeMachine extends CoffeeMake {
    brew() {
        console.log("Brewing coffee");
    }
}

const drip = new DripCoffeeMaker();
drip.on();
drip.brew();
drip.off();

const espresso = new EspressoMachine();
espresso.on();
espresso.brew();
espresso.off();

const coffeeMachine = new CoffeeMachine();
coffeeMachine.on();
coffeeMachine.brew();
coffeeMachine.off();
