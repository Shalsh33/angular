import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products/Product';

@Component({
  selector: 'app-buy-cart',
  templateUrl: './buy-cart.component.html',
  styleUrls: ['./buy-cart.component.scss']
})
export class BuyCartComponent implements OnInit {

  _product_list : Observable<Product[]>;
  constructor(private productCart : ProductCartService) {
    this._product_list = productCart.items;
   }

  ngOnInit(): void {
  }

}
