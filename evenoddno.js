"use strict";
//Find Even and odd Number ///
function evenov(num1) {
    if (num1 % 2 === 0) {
        return ("Even No.");
    }
    else {
        return ("Odd No.");
    }
}
//----------------------calling of Even odd find function-----------------//
let evenOdd = 123;
console.log(`\nYour Given No ${evenOdd} is: ${evenov(evenOdd)}`);
console.log("-----------------------------------------------------------");
