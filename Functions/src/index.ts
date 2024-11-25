function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(6, 8);
}
console.log(applyOperation(10, 5, (x, y) => x + y));                          // Output: 15
console.log(applyOperation(10, 5, (x, y) => x * y));                           // Output: 50

