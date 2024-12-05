class Animal {
    // Properties
    name: string;
    // Constructor
    constructor(name: string) {
      this.name = name;
    }
    // Method
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} fsdfgs: xcvbn!`);
    }
    // Additional method
    bark() {
      console.log(`${this.name} barks: Woof Woof!`);
    }
  }
  const myDog = new Dog("Buddy");
  myDog.makeSound(); // Output: Buddy makes a sound.
  myDog.bark(); // Output: Buddy barks: Woof Woof!

  
  const genericAnimal = new Animal("Generic Animal");
  genericAnimal.makeSound(); // Output: Generic Animal makes a sound.
  