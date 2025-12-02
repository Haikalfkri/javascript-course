// let randomNum = Math.random(); // generate random number between 0 and 1

// let randomNum = Math.floor(Math.random() * 101); // generate random number between 0 and 100?

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min; // generate random number between min and max (inclusive)

// console.log(randomNum);


const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}