import { Route } from '@angular/router';
import { AlmacenComponent } from './almacen.component';
import { Estanteria1Component } from './estanterias/estateria1.component';
import { Estanteria2Component } from './estanterias/estateria2.component';

export const rutasAlmacen: Route[] = [
  {
    path: '',
    component: AlmacenComponent,
  },
  {
    path: 'estanteria/1',
    component: Estanteria1Component,
  },
  {
    path: 'estanteria/2',
    component: Estanteria2Component,
  },
];
