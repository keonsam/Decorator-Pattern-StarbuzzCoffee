import { Beverage } from "../beverages/Beverage";

export interface CondimentsDecorator extends Beverage {
  beverage: Beverage;
}