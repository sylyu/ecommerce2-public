import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newProduct = {name: ''};
  errors = {};
  selectedFile: File = null;

  constructor(
    private http: HttpClient,
    private _httpService: HttpService,
    private _router: Router
    ){}


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name );
    this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd, { 
      reportProgress: true,
      observe: 'events'
      }
    ).subscribe(event => {console.log(event)
    });
  }

  ngOnInit() {
    this.newProduct = {name: ''};
  }

  addProductSubmit(){
    console.log(this.newProduct);
    let observable = this._httpService.newProduct(this.newProduct);
    observable.subscribe(data=>{
      console.log("Add Product", data);
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
