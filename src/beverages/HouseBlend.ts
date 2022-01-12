import { Beverage } from ".";

export class HouseBlend implements Beverage {
  _description = "House Blend";

  constructor() {}

  getDescription(): string {
    return this._description;
  }

  cost(): number {
    return 0.89;
  }
}
