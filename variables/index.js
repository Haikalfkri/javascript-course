// variable = a container that stores value.

// 1. declaration   let x;
// 2. assignment    x = 10;

// let x;
// x = 10;

// let y = 10;

// let age = 20;
// let firstName = "Alex";
// let gpa = 3.9;
// let isGraduated = false;


// console.log(typeof isGraduated);

// variable naming convention
// console.log(`Your name is ${firstName} and your ${age} years old.`);
// console.log(`Your gpa is ${gpa}. Graduated: ${isGraduated}`);


let fullName = "John Doe";
let age = 20;
let isStudent = true;
let gpa = 3.9;


document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your ${age} years old`;
document.getElementById("p3").textContent = `Your a student : ${isStudent} with gpa ${gpa}`;