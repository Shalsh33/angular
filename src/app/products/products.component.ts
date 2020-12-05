import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productosGrafica : Product[] = [
    {
      name: "Cuadernos personalizados",
      desc : "Tamaño A4, tapa dura, 80 hojas lisas, rayadas o cuadriculadas.",
      price : 800,
      stock: 5,
      discount: false,
      img: "assets/img/cuadernosA4.png",
      qtb : 0
    },
    {
      name: "Cuadernos personalizados",
      desc : "Tamaño A5, tapa dura, 80 hojas lisas, rayadas o cuadriculadas.",
      price : 700,
      stock: 0,
      discount: false,
      img: "assets/img/cuadernosA5.png",
      qtb : 0
    },
    {
      name: "Agendas personalizadas",
      desc : "Tamaño A5, tapa dura, 100 hojas organizador diario, control de gastos y contactos.",
      price : 950,
      stock: 9,
      discount: false,
      img: "assets/img/agendasA5.png",
      qtb : 0
    },
    {
      name: "Agendas personalizadas",
      desc : "Tamaño A4, tapa dura, 100 hojas organizador diario, control de gastos y contactos.",
      price : 1100,
      stock: 2,
      discount: true,
      img: "assets/img/agendasA4.png",
      qtb : 0
    }
  ]
  productos3D: Product[] = [
    {
      name: "Llaveros Futbol",
      desc : "Llaveros con el escudo de tu equipo.",
      price : 200,
      stock: 50,
      discount: true,
      img: "assets/img/llaveros.png",
      qtb : 0
    },
    {
      name: "Protector mascarilla facial",
      desc : "Ahora están más carillas.",
      price : 350,
      stock: 9,
      discount:false,
      img: "assets/img/mascarillas.png",
      qtb : 0
    }
  ]

  constructor(private productCartService: ProductCartService) {   }

  addToCart(product : Product) : void {
    this.productCartService.incluir(product);
    product.stock -= product.qtb;
    product.qtb = 0;
  }
  ngOnInit(): void {
  }
  noHayMas(){
    alert("No hay más stock disponible");
  }
}
