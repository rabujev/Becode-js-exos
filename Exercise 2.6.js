const readlineSync = require("readline-sync");
const days = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let x = parseInt(readlineSync.question("Enter a number between 1 and 7 | "));
while ((x < 1) || (x > 7)){
  x = parseInt(readlineSync.question("Enter a number between 1 and 7 | "))
};
console.log("You entered the number " + x + " and so it corresponds to " + days[x]);

// Ici, j'ai vu que Thib a utilisé la technique des arrays (merci à Sam de m'avoir dit que ça s'appelait comme ça) //
// Il utilise aussi const au lieu de let pour définir sa variable pour ne pas qu'elle puisse changer, puisque c'est une constante //
//Important quand on redéfinit une variable pour changer sa valeur, on utilise pas let mais simplement var = //
