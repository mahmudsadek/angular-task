import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/ICategory';
import {FormsModule} from '@angular/forms'
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';
import { IOrder } from '../../models/Iorder';
import { ProductServiceService } from '../../services/product-service.service';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductCardDirective,CreditCardPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges, OnInit {
  FilterdProduct:IProduct[] = [];
  creditcard:string = "00000000";
  @Input() selectedCat:number = 0;
  orders:IOrder[] = [];
  constructor(private _productService : ProductService) {
    
  }
  ngOnInit(): void {
    this._productService.GetAll().subscribe({
      next:(res)=> {
        this.FilterdProduct = res;
      },
      error:(err) => {
        console.log(err);
      } 
    })
  }
  ngOnChanges(): void {
    this.FilterProdcut();
  }
  Buy(prod:IProduct) {
    let numOfProductToBuy = document.getElementById(prod.id.toString()) as HTMLInputElement;
    //console.log(numOfProductToBuy)
    if(prod.quantity - parseInt(numOfProductToBuy.value) > 0)
    {
      prod.quantity -= parseInt(numOfProductToBuy.value);
      let found = false;
      for (let i = 0; i < this.orders.length; i++) {
        if(prod.id == this.orders[i].id) {
          found = true;
          this.orders[i].count += parseInt(numOfProductToBuy.value);
          this.orders[i].price += parseInt(numOfProductToBuy.value) * prod.price;
        }
      }
      if(!found) {
        let order = {
          id:prod.id,
          name:prod.name,
          price:prod.price * parseInt(numOfProductToBuy.value),
          count:parseInt(numOfProductToBuy.value)
        }
        this.orders.push(order);
        console.log(order);
        console.log(this.orders);
      }
    }
    //console.log(this.orders);
  }
  updateCreditCard() {
    let input = document.getElementById("inputEl") as HTMLInputElement;
    console.log(input.value);
    this.creditcard = input.value
  }
  // UpdateCreditCard(event:Event) {
  //   console.log(this.creditcard);
  // }

  FilterProdcut() {
    if(this.selectedCat == 0) {
      this._productService.GetAll().subscribe({
        next:(res)=> {
          this.FilterdProduct = res;
        },
        error:(err) => {
          console.log(err);
        } 
      });
    }
    else {
      this._productService.GetProductsByCatId(this.selectedCat).subscribe({
        next:(res)=> {
          this.FilterdProduct = res;
        },
        error:(err) => {
          console.log(err);
        } 
      })
    }
  }
}
