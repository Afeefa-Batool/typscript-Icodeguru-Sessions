"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} fsdfgs: xcvbn!`);
    }
    bark() {
        console.log(`${this.name} barks: Woof Woof!`);
    }
}
const myDog = new Dog("Buddy");
myDog.makeSound();
myDog.bark();
const genericAnimal = new Animal("Generic Animal");
genericAnimal.makeSound();
