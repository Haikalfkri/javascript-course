// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox


// let username;
// username = prompt("Enter your username: ");
// console.log(`Your username is : ${username}`);


let username;

document.getElementById("submit").onclick = function() {
    username = document.getElementById("myInput").value;
    // console.log(`Your username is : ${username}`);
    document.getElementById("h1").textContent = `Welcome ${username}`;
}