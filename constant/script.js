// constant or const = a value can't be changed


const PI = 3.14;
let radius;
let circumference;

// PI = 10 -> got error because PI is constant

// radius = prompt("Enter the radius of circle: ");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is: " + circumference);

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("h3").textContent = "The circumference is: " + circumference + " cm";
}