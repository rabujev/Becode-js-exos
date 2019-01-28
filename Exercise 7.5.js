const readlineSync = require("readline-sync");
//Exercise 7.5 - Array Sort
//Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.

//Mon raisonnement 
//faut les réordonner par odre croissant
//donc si arr[1] > arr[i]  on met arr[i] avant 1 et on continuee
//puis idem avec le 2 et ainsi de suite jusqu'au dernier
let arr = [];
while (arr.length < 10) {
arr.push((Math.round(Math.random() * 10)));
};
console.log(arr);
let i = 1
let j = 0
let temp
  while (j < arr.length) {
    while (i < arr.length){
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      };
      i++;
    };
    i = 0;
    j++;
  };
console.log(arr);
// ça marche mais je visualise pas tout à fait pourquoi (bien que je ne me sois aidé d'aucun support pour faire le code)
