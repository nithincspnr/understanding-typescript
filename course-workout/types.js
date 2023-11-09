"use strict";
// assign types
let myRealAge;
// myRealAge = '25'; // Type Error
// boolean
let hasHobbies = false;
// hasHobbies = 1;
// array
let hobbies = ["cooking", "sports"];
// Tuples
let myTuples = [1, "hello"];
console.log(myTuples);
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
// console.log(Color, "A");
