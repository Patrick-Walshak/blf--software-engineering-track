"use strict";
console.log("QUESTION 1...");
function areaOfNumber(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfNumber(4));
console.log("");
console.log("QUESTION  2...");
function checkEvenOrOddNum(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOrOddNum(4));
console.log(checkEvenOrOddNum(7));
console.log("");
console.log("QUESTION 3...");
function returnTwoValues(valu1, value2) {
    return [valu1, value2];
}
console.log(returnTwoValues("Wallex", "Coder"));
