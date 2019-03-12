import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private _http: HttpClient) {}

  // server.js contains server side CRUD. Test out with POSTMAN before moving forward
  // http.service contains the client side CRUD.  

  // GET ALL - Products
  getProducts(){
    // returns all the observables
    return this._http.get(`/api/products`);
  }

  // GET - a single Product
  getProduct(id: string){
    // returns a single observable
    return this._http.get(`/api/products/${id}`);
  }

  // POST - add Product
  newProduct(addProduct){
    console.log("add new Product", addProduct);
    return this._http.post('/api/products/add', addProduct);
  }
  
  // PUT - update Product with ID
  updateProduct(id, editProduct){
    console.log(`update Product with edit Product passed in ${id} ${id.name} ${id.description} ${id.price} ${id.unit_in_stock}`, editProduct);
    return this._http.put(`/api/products/${id}`, editProduct);
  }

  // DELETE = delete Product by id
  deleteProduct(id) {
    console.log('deleting product with id', id);
    return this._http.delete(`/api/products/` + id);
  }
}
