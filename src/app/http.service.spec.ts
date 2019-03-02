import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
    var products = service.getProducts();
    expect(products).toBeTruthy();
    let tempObservable = this._http.get('/tasks');
    //subscribe to our observable and provide the code we would like to do with our data from the response.
    products.subscribe(data => {
      expect(data).toBeTruthy();
      expect(data[0].name).toBeTruthy();
    });

  });

});
