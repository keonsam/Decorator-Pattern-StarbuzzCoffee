import { CondimentsDecorator } from ".";
import { Beverage } from "../beverages";

export class Mocha implements CondimentsDecorator {
  beverage: Beverage;
  _description = "Mocha";
  constructor(b: Beverage) {
    this.beverage = b;
  }

  getDescription(): string {
    return this._description + " " + this.beverage.getDescription();
  }

  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}
