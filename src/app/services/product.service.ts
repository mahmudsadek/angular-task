import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  GetAll():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`)
  }
  GetById(id:number):Observable<IProduct>{

    return this.httpClient.get<IProduct>(`${environment.baseUrl}/products/${id}`)

  }

  GetProductsByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
  }

  AddNew(prd:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(
    `${environment.baseUrl}/products`,JSON.stringify(prd)
    )
  }
  Update(id:number,prd:IProduct):Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${environment.baseUrl}/products/${id}`,JSON.stringify(prd));
  }
  Remove(id:number):Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${environment.baseUrl}/products/${id}`);
  }
}
