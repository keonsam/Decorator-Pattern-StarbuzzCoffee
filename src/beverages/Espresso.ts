import { Beverage } from ".";

export class Espresso implements Beverage {
  _description = "Espresso";
  constructor() {}

  getDescription(): string {
    return this._description;
  }

  cost(): number {
    return 1.99;
  }
}
