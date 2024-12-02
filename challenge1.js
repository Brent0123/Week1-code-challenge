const prompt = require("prompt-sync")();

function gradeGenerator() {
    const input = prompt("Enter student marks (between 0 and 100): ");
    const marks = parseInt(input);

    if (marks > 100 || marks < 0 || isNaN(marks)) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
    } else if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

gradeGenerator();
