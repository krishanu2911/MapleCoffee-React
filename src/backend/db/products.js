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
    price: "99",
    rating: "1",
    imgurl: "https://res.cloudinary.com/krishanucloud/image/upload/v1648324260/maplelatte_r2ged6.jpg",
    categoryName: "DARK_COFFEE",
  },
  {
    _id: uuid(),
    title: "Americano",
    newedition: false,
    author: "Junaid Qureshi",
    price: "299",
    rating: "2",
    imgurl: "https://res.cloudinary.com/krishanucloud/image/upload/v1648324251/mapleamericano_demiqi.jpg",
    categoryName: "MEDIUM_COFFEE",
  },
  {
    _id: uuid(),
    title: "cappuccino",
    newedition: false,
    author: "Shiv Khera",
    price: "199",
    rating: "3",
    imgurl: "https://res.cloudinary.com/krishanucloud/image/upload/v1648324237/maplecappucino_j8rolq.jpg",
    categoryName: "DARK_COFFEE",
  },
  {
    _id: uuid(),
    title: "Black coffee",
    newedition: true,
    author: "Shiv Khera",
    price: "499",
    rating: "4",
    imgurl: "https://res.cloudinary.com/krishanucloud/image/upload/v1648324223/mapleblack_dglfan.jpg",
    categoryName: "LIGHT_COFFEE",
  },
  {
    _id: uuid(),
    title: "Hazelnut",
    newedition: true,
    author: "Shiv Khera",
    price: "599",
    rating: "4",
    imgurl: "https://res.cloudinary.com/krishanucloud/image/upload/v1648324267/maplehazelnut_gpvhwi.jpg",
    categoryName: "LIGHT_COFFEE",
  },
];
