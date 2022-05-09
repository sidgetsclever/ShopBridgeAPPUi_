import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
