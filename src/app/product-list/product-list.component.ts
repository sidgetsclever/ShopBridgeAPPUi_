import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { CommonModule, JsonPipe  } from '@angular/common';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  
  form: FormGroup ;
  ProductList: any[] = [];
  SelectedProductName : String = "";
  SelectedProductDescription : String = "";
  SelectedProductPrice : Number = 0;
  SelectedProductId : Number = 0;
  SelectedProductThumbnail : String ="";
  object : any;

  ProductModel = new Product('',0,'','');
  constructor(public fb: FormBuilder, private ProductListService: ProductListService, private http: HttpClient) { 
    this.http.get('http://localhost:50058/api/Product').subscribe(data =>{
      this.ProductList.push(data);
    })
    this.form = this.fb.group({
      SelectedProductName : "",
      SelectedProductDescription : "",
      SelectedProductPrice : "",
      SelectedProductThumbnail : [null]
    })
  }

  ngOnInit(): void {
    this.ProductListService.getAllProducts().subscribe(data => {
      this.ProductList = data;
      console.log(data);
    })
  }

  

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.form?.patchValue({
      SelectedProductThumbnail: file
    });
    this.form?.get('SelectedProductThumbnail')?.updateValueAndValidity()
  }
  submitForm() {
    const params = JSON.stringify(this.ProductModel);
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Accept', 'application/json');
    this.http.post('http://localhost:50058/api/Product', params, { 'headers': headers }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    )
    console.log(this.ProductModel)
  }
}
