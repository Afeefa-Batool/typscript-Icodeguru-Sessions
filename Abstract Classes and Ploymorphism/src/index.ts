
// =============Abstract Classes===========
// abstract class Animal {
//     abstract makeSound(): void; // Abstract method
//     move(): void {
//       console.log("This animal moves.");
//     }
//   }
  
//   class Dog extends Animal {
//     makeSound(): void {
//       console.log("Woof! Woof!");
//     }
//   }
  
//   const myDog = new Dog();
//   myDog.makeSound(); // Output: Woof! Woof!
//   myDog.move(); // Output: This animal moves.
  

// ==========Polymorphism inn OOP===============

class Animal {
    makeSound(): void {
      console.log("Some sound");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow!");
    }
  }
  
  // Polymorphism in action
  const animals: Animal[] = [new Dog(), new Cat()];
  
  animals.forEach((animal) => animal.makeSound());


