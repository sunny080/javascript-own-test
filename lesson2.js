var a = 80;
var b = 20;
var c = a % b;
console.log(c);

// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

var d = 10 + "wake up";

if (d === 20) {
  console.log("equal");
} else {
  console.log("not equal");
}

// || only one condition is true to run this
// && required two is true

// const a = 10;
const age = 22;

if (age >= 18 || age <= 21) {
  console.log("ok");
}

const time = 22;
if (time > 12) {
  console.log("good morning");
} else if (time < 12) {
  console.log("evening");
}else{
    console.log("night");

}
let fname = 'sunny';
let lname= 'rajputt'

function fullName (a , b){
  return a + b;

}
const fullname = fullName(fname,lname )

console.log(fullname)
let name ="sunny";
let marks = 25000;

console.log(`hello ${name} your marks is ${marks}`)
