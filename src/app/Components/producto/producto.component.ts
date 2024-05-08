import { Component, Input, Pipe } from '@angular/core';
import { Produt } from '../../interfaces/product';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input({ required: true }) product!: Produt;
}
