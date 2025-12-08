// SWITCH = can be efficient replacement to many if else statements

// let day = "Wednesday";

// switch (day) {
//     case "Monday":
//         console.log("It's Monday, start of the week!");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday, keep going!");
//         break;
//     case "Wednesday":
//         console.log("It's Wednesday, halfway through!");
//         break;
//     case "Thursday":
//         console.log("It's Thursday, almost there!");
//         break;
//     case "Friday":
//         console.log("It's Friday, the weekend is near!");
//         break;
//     case "Saturday":
//         console.log("It's Saturday, time to relax!");
//         break;
//     case "Sunday":
//         console.log("It's Sunday, prepare for the week ahead!");
//         break;
//     default:
//         console.log("Not a valid day!");
//         break;
// }


let score = 90;
let message;

switch (true) {
    case (score >= 90):
        message = "A";
        break;
    case (score >= 80):
        message = "B";
        break;
    case (score >= 70):
        message = "C";
        break;
    case (score >= 60):
        message = "D";
        break;
    default:
        message = "You failed!";
        break;
}

console.log(message);