import { Beverage, DarkRoast, Espresso, HouseBlend } from "./src/beverages";
import { Mocha, Soy, Whip } from "./src/condiments";

class Starbuzz {
  main(): void {
    let beverage1: Beverage = new DarkRoast();
    beverage1 = new Mocha(beverage1);
    beverage1 = new Mocha(beverage1);
    beverage1 = new Whip(beverage1);
    console.log(beverage1.getDescription() + " $" + beverage1.cost());
    let beverage2: Beverage = new Espresso();
    console.log(beverage2.getDescription() + " $" + beverage2.cost());
    let beverage3: Beverage = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(beverage3.getDescription() + " $" + beverage3.cost())
  }
}

const starbuzz = new Starbuzz();
starbuzz.main();
