import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {}

  ngOnInit() {
    this.products = [];
    this.getProducts();
  }

  // currency format for price of product
  getPrice(floatNumber) {
    if (floatNumber) {
      return floatNumber.toLocaleString('us-US', { style: 'currency', currency: 'USD' });
    } else {
      return "--";
    }
  }

  price(product) {
    return this.getPrice(product.price);
  }

  getProducts() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.products = data['products'];
      console.log(this.products);
    });
  }

  deleteProduct(id) {
    console.log("delete product with id", id);
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log(data);
      this.getProducts();
    });
  }

}
