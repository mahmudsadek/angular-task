import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  GetAll():Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.baseUrl}/categories`)
  }
}
