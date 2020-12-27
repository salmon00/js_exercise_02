//1.Create a function that takes an array and returns the first element.
// Examples
/*
getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500
*/

function getFirstValue(numbers) {
  return numbers[0];
}

var array = [8, 5, 9];
var first = getFirstValue(array);
console.log(first);




//2.Write a function that converts hours into seconds.
//Examples
/*
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400
*/

function howManySeconds(hours) {
  console.log(hours * 3600);
}
howManySeconds(10);



//3.Create a function that takes the age and return the age in days.
/*Examples
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/

function calcAge(ageInYears) {
  console.log(ageInYears * 365)
}
calcAge(65);



//4.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
/*Examples
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/

function addition(number) {
  number++;
  console.log(number)
}
addition(2);


//5.Write a function that takes the base and height of a triangle and return its area.
/*Examples
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
*/

function triArea(base, height) {
  console.log((base * height)/2);
}
triArea(7 , 4);


