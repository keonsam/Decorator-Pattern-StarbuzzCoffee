import { Beverage } from ".";

export class DarkRoast implements Beverage {
  _description = "Dark Roast";

  constructor() {}

  getDescription(): string {
    return this._description;
  }

  cost(): number {
    return 1.49;
  }
}
