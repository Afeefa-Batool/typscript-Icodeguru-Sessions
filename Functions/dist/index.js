"use strict";
function applyOperation(a, b, operation) {
    return operation(6, 8);
}
console.log(applyOperation(10, 5, (x, y) => x + y));
console.log(applyOperation(10, 5, (x, y) => x * y));
//# sourceMappingURL=index.js.map