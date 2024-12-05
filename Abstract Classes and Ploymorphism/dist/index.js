"use strict";
class Animal {
    makeSound() {
        console.log("Some sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());
//# sourceMappingURL=index.js.map