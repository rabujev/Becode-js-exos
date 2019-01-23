const readlineSync = require("readline-sync");
//__________________________________Version bcp plus élégante et terminée_________________________________________________________________________________
let askTvSerie = () => {
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
convertToJSON(askTvSerie());
