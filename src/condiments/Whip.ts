import { CondimentsDecorator } from ".";
import { Beverage } from "../beverages";

export class Whip implements CondimentsDecorator {
  beverage: Beverage;
  _description = "Whip";
  constructor(b: Beverage) {
    this.beverage = b;
  }

  getDescription(): string {
    return this._description + " " + this.beverage.getDescription();
  }

  cost(): number {
    return 0.1 + this.beverage.cost();
  }
}
