//Program to check whether a triangle is equilateral or isosceles or scalene.

const readlineSync = require("readline-sync");

let angle_1 = parseInt(readlineSync.question("Enter the 1st side:- "));
let angle_2 = parseInt(readlineSync.question("Enter the 2nd side:- "));
let angle_3 = parseInt(readlineSync.question("Enter the 3rd side:- "));

findTraingle(angle_1, angle_2, angle_3)

function findTraingle(angle1, angle2, angle3){
    if((angle1 === angle2) && (angle1 === angle3)){
        return console.log("It's an equilateral triangle");
    } else if(((angle1 === angle2) && (angle2 !== angle3)) || ((angle2 === angle3) && (angle3 !== angle1)) || ((angle3 === angle1) && (angle1 !== angle2))){
        return console.log("It's an isosceles triangle");
    }else{
        return console.log("It's a scalen triangle");
    }
}



