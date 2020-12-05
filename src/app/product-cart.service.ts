import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './products/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _products : Product[] = [];
  private _productsSubject : BehaviorSubject<Product[]> = new BehaviorSubject(this._products);
  items: Observable<Product[]> = this._productsSubject.asObservable();
  constructor() { }

  incluir(product : Product) : void {
    
      let item: Product = this._products.find((elem) => elem.name == product.name);
      if(!item) {
        this._products.push({ ... product});
      } else {
        item.qtb += product.qtb;
      }

      this._productsSubject.next(this._products);
    
   
  }
}
