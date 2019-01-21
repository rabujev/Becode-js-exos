const readlineSync = require("readline-sync");
let shoeSize = parseInt(readlineSync.question("Give me your shoe size "));
let birthYear = parseInt(readlineSync.question("Your birth year? "));
console.log(1766 - birthYear + (50 * (5 + (shoeSize * 2))));
//important de parseInt (ou float) pour bien faire comprendre à la machine que shoeSize et birthYear sont pas des strings mais biens des nombres (sinon quand tu fais un + ça juxtapose et n'additionne pas) //
