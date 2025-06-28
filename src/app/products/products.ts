import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products implements OnInit {
  products : any;

  constructor() {

  }
  // this methode execute at the start of the application
  ngOnInit(): void {
    this.products = [
      {id:1, name:"Computer", price:2300, selected:true},
      {id:2, name:"Printer", price:1200 , selected:false},
      {id:3, name:"Smart Phone", price: 1100 , selected:true}
    ];
  }

  deleteProduct(product: any) {
    let Confirmed = confirm("Are you sure you want to delete this product?");
    if (Confirmed) {
      this.products.splice(this.products.indexOf(product),1);
      // this.products.filter((p: { id: any; })=> p.id !== product.id);
    }

  }
}
