import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:50058/api/Product')
  }
}
