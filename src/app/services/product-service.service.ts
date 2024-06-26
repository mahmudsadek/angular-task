import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  Products:IProduct[]
  constructor() {
    this.Products = [
      {
        id: 1,
        name: "iPhone 13 Pro",
        price: 999.99,
        quantity: 50,
        imgUrl: "https://tradelinestores.s3.amazonaws.com/media/product_images/cc6e7cf2-abbd-498b-a6fc-ebdd36ee8890.png",
        catId: 1 // Category ID for phones
      },
      {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 899.99,
        quantity: 70,
        imgUrl: "https://i5.walmartimages.com/seo/Samsung-Galaxy-S21-Plus-5G-128-256GB-SM-G996U1-US-Model-Unlocked-Cell-Phones-Very-Good-Condition_46af8b5d-3a63-46e8-97d7-3a8f9fa35f00.4243b2ff1db36d328a46f09ad220d988.jpeg",
        catId: 1 // Category ID for phones
      },
      {
        id: 3,
        name: "Google Pixel 6",
        price: 799.99,
        quantity: 60,
        imgUrl: "https://m.media-amazon.com/images/I/6191aDbiwjL._AC_UF894,1000_QL80_.jpg",
        catId: 1 // Category ID for phones
      },
      {
        id: 4,
        name: "MacBook Pro",
        price: 1299.99,
        quantity: 30,
        imgUrl: "https://btech.com/media/catalog/product/cache/fe7de4bf2cb02fc4b6b563464fe6eed6/1/b/1baplpmdmnep3aeml008_2.jpeg",
        catId: 2 // Category ID for laptops
      },
      {
        id: 5,
        name: "Dell XPS 15",
        price: 1199.99,
        quantity: 40,
        imgUrl: "https://adminapi.applegadgetsbd.com/storage/media/large/XPS-15-9530-c-1421.jpg",
        catId: 2 // Category ID for laptops
      },
      {
        id: 6,
        name: "HP Spectre x360",
        price: 1099.99,
        quantity: 35,
        imgUrl: "https://starlite.com.gh/cdn/shop/products/hp-spectre-14-ef0013dx-corei7-11_1000x.jpg?v=1670946976",
        catId: 2 // Category ID for laptops
      },
      {
        id: 7,
        name: "Apple Watch Series 7",
        price: 399.99,
        quantity: 20,
        imgUrl: "https://cairosales.com/63619-large_default/apple-watch-series-7-gps-45mm-blue-aluminium-case-with-abyss-blue-sport-band-regular-mkn83aea.jpg",
        catId: 3 // Category ID for smartwatches
      },
      {
        id: 8,
        name: "Samsung Galaxy Watch 4",
        price: 349.99,
        quantity: 25,
        imgUrl: "https://btech.com/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/6/4/6464602_sd.jpg",
        catId: 3 // Category ID for smartwatches
      },
      {
        id: 9,
        name: "Fitbit Versa 3",
        price: 229.99,
        quantity: 30,
        imgUrl: "https://5.imimg.com/data5/SELLER/Default/2022/6/AG/UP/QK/8370675/fitbit-versa-3-smart-watch-500x500.jpg",
        catId: 3 // Category ID for smartwatches
      },
    ]
   }

  GetProductById(id:number):IProduct| undefined {
    let prod =  this.Products.find(p => p.id == id);
    return prod;
  }
  GetAllProducts():IProduct[] {
    return this.Products;
  }

  GetProductByCatId(catId:number):IProduct[] {
    return this.Products.filter(p => p.catId == catId);
  } 

}
