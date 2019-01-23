const readlineSync = require("readline-sync");
//___________________________________________________________________________________________________________________
let askTvSerie = () => {

  let name = readlineSync.question("What's the name of your favorite TV Show? | ");
  let prodYear = readlineSync.question("What year was it produced in? | ");
  let cast = [];
  let actor;
  while (actor !== "0") {
    actor = readlineSync.question("Give me the name of a member of the cast, enter 0 to proceed to the next step | ");
    cast.push(actor);
  };
  if (actor = "0") {
    cast.pop();
  }
  let allDataInOneObject = {
    Name: "",
    "Production Year": "",
    Cast: []
  }
  allDataInOneObject.Name = readlineSync.question("What's the name of your favorite TV Show? | ");
  allDataInOneObject."Production Year" = readlineSync.question("What year was it produced in? | ");
  allDataInOneObject.Cast.push = actor
  return allDataInOneObject
}
console.log(askTvSerie());
