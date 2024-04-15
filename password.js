"use strict";
let password = 'WaseemGhazi123!';
let username = 'Waseem';
if (uservalid(username)) {
    console.log("User Name validate");
}
switch (strongpassword(password)) {
    case 1:
        console.log("Pasword length lessthan 6");
        break;
    case 2:
        console.log("Must be use atleast one Cap letter");
        break;
    case 3:
        console.log("Must be use atleast one small letter");
        break;
    case 4:
        console.log("Must contain one digit");
        break;
    case 5:
        console.log("Password must contain special character");
        break;
}
if (uservalid(username) && strongpassword(password) == 0) {
    console.log("User Successful Login", username);
}
else {
    console.log("Invalid User or Password");
}
// Checking strong password
function strongpassword(pwd) {
    let Pvalid = 0;
    if (pwd.length < 6) {
        return (1);
    }
    else if (!/[A-Z]/.test(pwd)) {
        return (2);
    }
    else if (!/[a-z]/.test(pwd)) {
        return (3);
    }
    else if (!/\d/.test(pwd)) {
        return (4);
    }
    else if (!/[$@$!%?&^_-]/.test(pwd)) {
        return (5);
    }
    else {
        return (0);
    }
}
// funciton user listed
function uservalid(user) {
    let Uvalid = false;
    if (user == "Waseem") {
        Uvalid = true;
        return Uvalid;
    }
}
