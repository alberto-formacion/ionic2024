import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductoResponse } from '../model/productoResponse';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endpoint = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<ProductoResponse>{
    return this.http.get<ProductoResponse>(this.endpoint);
  }

  getProductById(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.endpoint}/${id}`);
  }
}
