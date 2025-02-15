// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
// console.log(marksBMI, johnsBMI)

if(marksBMI > johnsBMI) {
    console.log(`Marks BMI ${marksBMI.toFixed()} is higher than Johns BMI ${johnsBMI.toFixed()}`)
} else {
    console.log(`Johns BMI ${johnsBMIBMI} is higher than Marks BMI ${marksBMIBMI}`)
}