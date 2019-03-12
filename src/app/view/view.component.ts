import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  product : any; //** gets one restaurant on this page */

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    // ** gets the products to show on the page
    this.getProduct();
  }

  // ** get the product from the ID in the URL
  getProduct(){
    let product_id = this._route.snapshot.paramMap.get("_id");
    let observable = this._httpService.getProduct(product_id);
    observable.subscribe(data=>{
      this.product = data;
      console.log("Got product: ", this.product);
    })
  }

  deleteProduct(){}
}
