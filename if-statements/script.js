// IF STATEMENTS = if a condition is true, then do something
//                 if not, then do something else


let time = 9;

if (time < 12) {
    console.log("Good morning");
}
else {
    console.log("Good afternoon");
}


let isStudent = true;

if (isStudent) {
    console.log("You are a student");
}
else {
    console.log("You are not a student")
}

let age1 = 18;
let hasID = false;
let hasLisence = true;

if (age1 >= 16 && age1 < 18) {
    console.log("You are old enough to drive");
    if (hasLisence) {
        console.log("You can drive");
    }
    else {
        console.log("You cannot drive without a lisence");
    }
}
else if (age1 >= 18) {
    console.log("You are old enough to vote");
    if (hasID) {
        console.log("You can vote");
    } else {
        console.log("You cannot vote without an ID");
    }
}
else if (age1 == 0) {
    console.log("Your age cannot be 0");
}
else {
    console.log("You are not old enough to vote");
}


const myInput = document.getElementById("myInput");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
let age;


submitBtn.onclick = function() {
    age = myInput.value;
    age = Number(age);

    if (age >= 16 && age < 18) {
        console.log("You are old enough to drive");
        result.textContent = "You are old enough to drive";
    }
    else if (age >= 18) {
        console.log("You are old enough to vote");
        result.textContent = "You are old enough to vote";
    }
    else if (age == 0) {
        console.log("Your age cannot be 0");
        result.textContent = "Your age cannot be 0";
    }
    else {
        console.log("You are not old enough to vote");
        result.textContent = "You are not old enough to vote";
    }
}