
// Arrays
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
let arr1 = [3,7,34,90,12];
let arr = arr1.slice (-1);
console.log(arr);
// arr2 = [true, "green", "where",12,56]
let arr2 = [true, "green", "where",12,56];
let finalArr = arr2.slice (-1);
console.log(finalArr);
// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
const myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join());
// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
arr3.sort();
console.log(arr3);


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arrFruits = ["apple", "mango", "apple","orange", "mango", "mango"];
let  finalFruits = [new Set(arrFruits)];
console.log(finalFruits);
 
// Write a JS script to search for the following word in the array.
// 4
let arr5 = ["the", "way", "x", 4, 23];
const includeFour = arr5.includes(4);
console.log(includeFour);
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];
// Write a JS script to sort the following string
// let word = "lufituaeb"