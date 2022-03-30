import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryTitle:"LightCoffee",
    categoryName: "LIGHT_COFFEE",
    description:
      "Light roasts provide the lightest, most delicate flavors.This Helps the coffee to have their original aroma",
  },
  {
    _id: uuid(),
    categoryTitle:"MediumCoffee",
    categoryName: "MEDIUM_COFFEE",
    description:
      "Medium-roasted beans will have a chocolate brown color, dry surface, and a full flavor.",
  },
  {
    _id: uuid(),
    categoryTitle: "DarkCoffee",
    categoryName: "DARK_COFFEE",
    description:
      "Dark-roasted coffee is roasted until the sugars begin to caramelize and the oils begin to rise to the surface of the bean.",
  },
];
