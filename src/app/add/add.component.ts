import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // calls interface in model class
  //public product: Product;
  newProduct = {name: ''};
  errors = {};

  constructor(
    private _authorService: HttpService,
    // private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.newProduct = {name: ''};
  }

  addProductSubmit(){
    console.log(this.newProduct);
    let observable = this._authorService.newProduct(this.newProduct);
    observable.subscribe(data=>{
      console.log("Add Author", data);
      console.log(data['data']['errors']);
      // display error in client
      if (data['data']['errors']) {
        this.errors = data['data']['errors'];
        console.log(this.errors);
      } else {
        // reset form
        this.newProduct = {name: ''};
        //re-route to thome
        this._router.navigate(['/home']);
      }
    })
  }

}
