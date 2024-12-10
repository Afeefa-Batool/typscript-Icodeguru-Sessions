"use strict";
// enum Direction {
//   North,
//   South,
//   East,
//   West,
// }
// console.log(Direction.North);
// console.log(Direction.West);
// function move(direction: Direction) {
//   console.log(`Moving in the direction: ${Direction[direction]}`);
// }
// move(Direction.East);
// ----assigning custom value======
// enum Status {
//     Active = 1,
//     Inactive = 0,
//     Pending = 2,
//   }
//   console.log(Status.Active); // Output: 1
//   console.log(Status["Inactive"]); // Output: 0
//   =======aissgn strings=======
// enum Colors {
//   Red = "RED",
//   Green = "GREEN",
//   Blue = "BLUE",
// }
// console.log(Colors.Red); // Output: RED
// ======choosing favorite color example ===============
// enum FavoriteColor {
//     Red,
//     Blue,
//     Green,
//   }
//   function getColorMessage(color: FavoriteColor) {
//     switch (color) {
//       case FavoriteColor.Red:
//         return "You chose Red!";
//       case FavoriteColor.Blue:
//         return "You chose Blue!";
//       case FavoriteColor.Green:
//         return "You chose Green!";
//       default:
//         return "Invalid color!";
//     }
//   }
//   console.log(getColorMessage(FavoriteColor.Blue)); // Output: You chose Blue!
// =======check presennce of particular=====
var Days;
(function (Days) {
    Days["Monday"] = "Mon";
    Days["Tuesday"] = "Tue";
    Days["Wednesday"] = "Wed";
    Days["Thursday"] = "Thu";
    Days["Friday"] = "Fri";
    Days["Saturday"] = "Sat";
    Days["Sunday"] = "Sun";
})(Days || (Days = {}));
function isWeekend(day) {
    return day === Days.Saturday || day === Days.Sunday;
}
console.log(isWeekend(Days.Monday)); // Output: false
console.log(isWeekend(Days.Sunday)); // Output: true
//# sourceMappingURL=index.js.map