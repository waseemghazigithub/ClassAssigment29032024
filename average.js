"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 0;
let avg = [12, 3, 5];
// a=m_avg([2,2,2]); Direct passing array
a = m_avg(avg);
console.log("Average of Above Array", a);
//================Average function
function m_avg(av) {
    let tot = 0;
    for (let i = 0; i < av.length; i++) {
        tot = tot + av[i];
    }
    return tot / av.length;
}
