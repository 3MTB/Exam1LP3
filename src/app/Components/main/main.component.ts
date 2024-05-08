import { RouterLink } from '@angular/router';
import { Produt } from '../../interfaces/product';
import { ProductoComponent } from '../producto/producto.component';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductoComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  AllProducts: Produt[] = [];
  constructor(private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.productsService.getAllProducts().then((obt) => {
      this.AllProducts = obt;
    });
  }


}
