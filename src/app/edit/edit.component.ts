import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct = {};
  errors = {};
  _id = "";

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._id = "";
    this.getProduct();
  }

  // ** Get the Product we are editing
  getProduct() {
    this._id = this._route.snapshot.paramMap.get("_id");
    console.log(this._id);
    console.log(`getProduct(${this.editProduct})`);
    let observable = this._httpService.getProduct(this._id);// ** get single product
    observable.subscribe(data => {
      console.log("from get product" + data)
      if(!data['err']) {
        this.editProduct = data;// ** as Product
        console.log("from getProducct" + this.editProduct);
      }else {
        this.errors = data; 
        console.log(this.errors);
      }
    });
  }

  editProductSubmit(){
    let observable = this._httpService.updateProduct(this._id, this.editProduct);
    observable.subscribe(data=> {
      console.log("Edit Product", data);
      // display errors in client
      if (!data['status']){
        this.errors = data['data']['errors'];
        console.log("from editProductSubmit" + this.errors);
      }else{
        //navigate back home
        this._router.navigate(['/home']);
      }
    })
  }
}
