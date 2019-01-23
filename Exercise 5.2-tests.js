const readlineSync = require("readline-sync");
//__________________________________Version bcp plus élégante et terminée_________________________________________________________________________________
//Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined
//in the previous exercise and return a list of the same cast but in a random order.
function askTvSerie() {
  let allDataInOneObject = {
    Name: "",
    ProductionYear: "",    // Comment mettre  un espace à la key et utiliser la fonction object.nom avec espace (pour ajouter)
    Cast: []
  }
  allDataInOneObject.Name = readlineSync.question("What's the name of your favorite TV Show? | ");
  allDataInOneObject.ProductionYear = readlineSync.question("What year was it produced in? | ");
  let actor;
  while (actor !== "0") {
    allDataInOneObject.Cast.push(actor);
    actor = readlineSync.question("Give me the name of a cast member, enter 0 to proceed to the next step | ");

  };
  allDataInOneObject.Cast.shift();
  return allDataInOneObject;
}
function convertToJSON(x) {
    let allDataInOneObjectJSON = JSON.stringify(x);
    console.log(allDataInOneObjectJSON);   //Does this count as displaying an object in JSON format ??
}

//__________________________________________________________________________________________________________________
function randomizeCast(tvSerie) {
  let currentIndex = tvSerie.Cast.length;
  console.log(tvSerie.Cast);
  let randomIndex;
  let temp;
  while (currentIndex > 0) {
    --currentIndex;
    randomIndex = Math.round((Math.random() * currentIndex));
    temp = tvSerie.Cast[currentIndex];
    tvSerie.Cast[currentIndex] = tvSerie.Cast[randomIndex];
    tvSerie.Cast[randomIndex] = temp;
  };
  return tvSerie.Cast
};
console.log("The randomized cast is " + randomizeCast(askTvSerie()));
