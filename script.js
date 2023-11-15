//Create another class that extends the Animal class and includes a method that the class can only use.
class Animal {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
    printName() {
      console.log(`The name of this animal is ${this.name}`);
    }
    showHeight() {
      console.log(`The height of this animal is ${this.height} ft`);
    }
    showWeight() {
      console.log(`The weight of this animal is ${this.weight} lbs`);
    }
  }
  const ringedSeal = new Animal("seal", 5, 120);
  //Print the name of the ringedSeal
  ringedSeal.printName();
  //my work based off the demostration example 
  class Elephant extends Animal {
    constructor(name, height, weight, trunk) {
      super(name, height, weight);
      this.trunk = trunk;
    }
    showTrunk() {
      if (this.trunk < 1) {
      console.log(`${this.name} is definitely another animal`);
    } else if (this.trunk > 1) { 
      console.log(`I don't know what ${this.name} is. They are definitely trunky and not an animal but maybe a mutant.`);  
    } else {
        console.log(`${this.name} is definitely an elephant.`);
      }
    } 
  }
  const elle = new Elephant("Ell", 6, 200, 5);
  const ed = new Elephant("Ed", 20, 10000, 1);
  const jacob = new Elephant("Jacob", 5, 120, 0);
  
  elle.showTrunk();
  elle.showWeight();
  elle.showHeight();
  
  ed.showTrunk();
  ed.showWeight();
  ed.showHeight();
  
  jacob.showTrunk();
  jacob.showWeight();
  jacob.showHeight();
  
  
  //////////////////////////////////////////////////
  
  //my work before demonstation example 
  class Bird extends Animal {
    constructor(name, height, weight, wingspan) {
      super(name, height, weight);
      this.wingspan = wingspan;
    }
    showWingspan() {
      console.log(`The wingspan of this bird is ${this.wingspan} ft`);
    }
    showWeight() {
      console.log(`This bird is approximately ${this.weight} lbs, and would take anywhere from 50 to 250 ${this.name}s to make a pound.`);
    }
    printName() {
      console.log(`The animal is a ${this.name}.`);
    }
  }
  const hummingbird = new Bird("hummingbird", 5, 0.01, 6);
  hummingbird.showWingspan();
  hummingbird.showWeight();
  hummingbird.printName();