// 1. Basic Function
       function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 2. Specifying Parameter Types
function add(a: number, b: number): number { return a + b; } console.log(add(5, 3));
// 3. Specifying Return Types
function subtract(a: number, b: number): number {
    return a - b;
}
console.log(subtract(10, 4));           // Output: 6

// 4. Optional Parameters
function multiply(a: number, b?: number): number {
    return b ? a * b : a;                     // If `b` is not provided, return `a`.
}
console.log(multiply(5));                 // Output: 5
console.log(multiply(5, 2));             // Output: 10
// 5. Default Parameters
function divide(a: number, b: number = 1): number {
    return a / b;
}
console.log(divide(10));                  // Output: 10 (b defaults to 1)
console.log(divide(10, 2));              // Output: 5

// 6. Rest Parameters
// Rest parameters allow a function to accept an arbitrary number of arguments as an array.
// ...numbers: Combines all the arguments passed to the function into a single array named numbers

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));        // Output: 15

// 7. Anonymous Functions and Arrow Functions
const greet = (name: string): string => `Hello, ${name}!`;
console.log(greet("Afeefa"));            // Output: Hello, Afeefa!

// 8. Advanced Concepts
//             Higher-order function:
// A function that takes another function as an argument or returns a function.
// Here, applyOperation is a higher-order function because it accepts the operation function as a parameter.

function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
console.log(applyOperation(10, 5, (x, y) => x + y));                          // Output: 15
console.log(applyOperation(10, 5, (x, y) => x * y));                           // Output: 50





























