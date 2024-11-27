// 6. Rest Parameters
// Rest parameters allow a function to accept an arbitrary number of arguments as an array.
// ...numbers: Combines all the arguments passed to the function into a single array named numbers
// Example 1:
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));        // Output: 15

// Example 2: Finding the Maximum Value
function findMax(...numbers: number[]): number {
    return Math.max(...numbers);
}

// Usage
console.log(findMax(5, 10, 15, 20)); // Output: 20
console.log(findMax(100, 50, 75));   // Output: 100


// ===================
// Higher-order function:
// A function that takes another function as an argument or returns a function.
// Here, applyOperation is a higher-order function because it accepts the operation function as a parameter.

function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
console.log(applyOperation(10, 5, (x, y) => x + y));                          // Output: 15
console.log(applyOperation(10, 5, (x, y) => x * y));                           // Output: 50


// Over-loading Function:
// Example-1
// Function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function implementation
function add(a: any, b: any): any {
    return a + b;
}

// Usage
console.log(add(5, 10));        // Output: 15
console.log(add("Hello, ", "World!")); // Output: Hello, World!


// Example-2

// Overload signatures
function log(message: string): void;
function log(messages: string[]): void;
// Implementation
function log(input: string | string[]): void {
  if (typeof input === "string") {
    console.log(`Log: ${input}`);
  } else {
    input.forEach(msg => console.log(`Log: ${msg}`));
  }
}
log("System started");                  // Output: Log: System started
log(["User logged in", "Error occurred"]); // Multiple logs


