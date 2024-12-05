"use strict";
// let colors:string[] = ["red","blue","yeloo"]
// colors.pop()
// console.log(colors)
// // iterating an array
// let numbers: number[] = [10, 20, 30];
// // not return
// numbers.forEach((num) => num * 2);
// console.log(numbers)
// let doubledNumbers = numbers.map((num) => num * 2 );
// console.log(doubledNumbers); 
// array of objects
// interface User{
//     name :string;
//     age:number;
// }
// let users : User[] = [
// {name:"vxcvb",age:25},
// {name:"nbvc",age:28},
// ]
// console.log(users)
// mixed array 
// let a:(string |number|boolean)[] =["cnv",46,true]
let grades = [85, 92, 78, 90, 88, 76];
function calculateAverage(grades) {
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}
let average = calculateAverage(grades);
let highestGrade = Math.max(...grades);
let lowestGrade = Math.min(...grades);
console.log(`Average Grade: ${average}`);
console.log(`Highest Grade: ${highestGrade}`);
console.log(`Lowest Grade: ${lowestGrade}`);
grades.forEach((grade) => {
    let message = grade >= 90
        ? "Excellent"
        : grade >= 80
            ? "Good"
            : grade >= 70
                ? "Needs Improvement"
                : "Fail";
    console.log(`Grade: ${grade} - ${message}`);
});
//# sourceMappingURL=index.js.map