import { Component, NgModule, OnInit } from '@angular/core';
import { ICategory } from '../../models/ICategory';
import { IProduct } from '../../models/IProduct';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Route, Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{

  Categories: ICategory[] = []
  Product:IProduct  ={} as IProduct 
  constructor(
    private _CategoryService: CategoryService, 
    private _ProductSrvice: ProductService,
    private router:Router) { }
  ngOnInit(): void {
    this._CategoryService.GetAll().subscribe({
      next:(res) => {
        this.Categories = res;
        console.log(this.Categories);
        console.log(res);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  Add() {
    this._ProductSrvice.AddNew(this.Product).subscribe({
      next:(res) => {
        this.router.navigateByUrl("/home");
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
