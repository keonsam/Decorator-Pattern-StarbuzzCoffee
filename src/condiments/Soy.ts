import { CondimentsDecorator } from ".";
import { Beverage } from "../beverages";

export class Soy implements CondimentsDecorator {
  beverage: Beverage;
  _description = "Soy";
  constructor(b: Beverage) {
    this.beverage = b;
  }

  getDescription(): string {
    return this._description + " " + this.beverage.getDescription();
  }

  cost(): number {
    return 0.3 + this.beverage.cost();
  }
}
