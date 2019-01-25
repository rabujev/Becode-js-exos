const readlineSync = require("readline-sync");
//it's working, need to do the bonus part of the guidelines now
let pizzaFlavorsList = [];
console.log("Hello! Welcome to the Pizza Flavors Manager.");
console.log();
console.log("Please choose your actions: ");
console.log();
function pizzaFlavFunction() {
  console.log();
  console.log("1 - List all the pizza flavors");
  console.log("2 - Add a new pizza flavor");
  console.log("3 - Remove a pizza flavor");
  console.log("4 - Exit this program");
  console.log();
  menuNumber = readlineSync.questionInt("Enter your action's number: ");
  if (menuNumber == 1) {
    console.log(pizzaFlavorsList);
    pizzaFlavFunction();
  } else if (menuNumber == 2) {
    newFlavor = readlineSync.question("Enter the name of the flavor you wish to add: ");
    pizzaFlavorsList.push(newFlavor);
    pizzaFlavFunction();
  } else if (menuNumber == 3) {
      let flavorToRemove = readlineSync.question("Enter the name of the flavor you wish to remove | ");
      let compteur = 0
      while (compteur < pizzaFlavorsList.length) {
        if (pizzaFlavorsList[compteur] == flavorToRemove) {
          pizzaFlavorsList.splice(compteur, 1);
        };
        ++compteur;
      };
      pizzaFlavFunction();
  } else if (menuNumber == 4) {
    console.log("Bye-bye");
  } else {
    pizzaFlavFunction();
  };
};
pizzaFlavFunction()
