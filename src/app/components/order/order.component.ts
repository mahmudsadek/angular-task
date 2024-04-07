import { AfterViewInit, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../models/ICategory';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IOrder } from '../../models/Iorder';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductsComponent,FormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit{
  Categories:ICategory[];
  selectedCat:number = 0;
  @ViewChild(ProductsComponent) product: any;
  orders:IOrder[] = [];
  constructor() {
    this.Categories = [
      {
        id:1,
        name:"Phones"
      },
      {
        id:2,
        name:"Laptops"
      },
      {
        id:3,
        name:"Smart Watch"
      }
    ]
  }
  
  ngAfterViewInit(): void {
    this.orders = this.product.orders;
  }
  

  remove(order:IOrder) {
    //console.log( this.product.Products)
    for (let i = 0; i < this.product.Products.length; i++) {
   //   console.log(this.product.Products[i]);
      if(order.id == this.product.Products[i].id) {
        this.product.Products[i].quantity += order.count;
      }
    }
    this.orders = this.orders.filter((o:IOrder) => o.id != order.id);
    this.product.orders = this.product.orders.filter((o:IOrder) => o.id != order.id);
    console.log(this.orders);
    console.log(this.product.orders);
  }
}