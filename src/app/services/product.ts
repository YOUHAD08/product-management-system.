import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // This makes sure that this service is available to all components.
})
export class Product {

  products = [
    {id:1, name:"Computer", price:2300, selected:true},
    {id:2, name:"Printer", price:1200 , selected:false},
    {id:3, name:"Smart Phone", price: 1100 , selected:true}
  ];
  constructor() { }

  getAllProducts():  any {
    return this.products;
  }

  deleteProduct(product: any):  void{
      this.products.splice(this.products.indexOf(product),1);
      // this.products.filter((p: { id: any; })=> p.id !== product.id);

  }
}
