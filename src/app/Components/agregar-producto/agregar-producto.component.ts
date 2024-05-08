import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Produt } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit {


  constructor(private serv: ProductsService) {

  }

  ngOnInit() {
    //this.serv
  }
  AddNewProduct(name: string, description: string, price: string) {
    let AddProduct: Produt = {
      nombre: name,
      descripcion: description,
      precio: parseInt(price)
    };
    this.serv.PutProduct(AddProduct);
  }
}
