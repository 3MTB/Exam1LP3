import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { AgregarProductoComponent } from './Components/agregar-producto/agregar-producto.component';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    title: "All Components",

  }
  ,
  {
    path: 'add',
    component: AgregarProductoComponent,
    title: 'Add Producto'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];
