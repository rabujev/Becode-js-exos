const readlineSync = require("readline-sync");
//__________________________________Version bcp plus élégante et terminée_________________________________________________________________________________
class Country {
  constructor(name) {
    this.name = name;
  }
  declareWar(other) {
    console.log(this.name + " declare war to " + other);
  }
}

new Country("United States").declareWar("everyone");
