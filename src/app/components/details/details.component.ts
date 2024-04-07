import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/IProduct';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  private route =  inject(ActivatedRoute)
  product:IProduct | undefined;
  constructor(private _prodactService :ProductServiceService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      console.log(id);
      this.product = this._prodactService.GetProductById(+id);
      console.log(this.product);
    }
  }
  
}
