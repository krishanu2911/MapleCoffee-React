import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Latte",
    newedition: true,
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "Americano",
    newedition: false,
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Cappecino",
    newedition: false,
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Black coffee",
    newedition: true,
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Hazelnut",
    newedition: true,
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];
