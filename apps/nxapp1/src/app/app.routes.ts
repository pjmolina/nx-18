import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authChildGuard, authGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    canActivate: [authGuard],
    component: WelcomeComponent,
  },
  {
    path: 'about',
    canActivate: [authGuard],
    component: AboutComponent,
  },
  {
    path: 'pizzas/:id',
    canActivate: [authGuard],
    component: PizzaDetailComponent,
    pathMatch: 'full',
    data: { mode: 'detail', a: 12, b: true },
  },
  {
    path: 'pizzas',
    canActivate: [authGuard],
    pathMatch: 'full',
    component: PizzaListComponent,
  },
  {
    // 1. carga rutas
    path: 'almacen',
    loadChildren: () =>
      import('./almacen/almacen.routes').then((c) => c.rutasAlmacen),
    canActivateChild: [authChildGuard],
  },
  // {
  //   // 2. carga componentes
  //   path: 'almacen',
  //   loadComponent: () =>
  //     import('./almacen/almacen.component').then((c) => c.AlmacenComponent),
  // },
  // {
  //   // 2. carga componentes
  //   path: 'almacen/estanteria/1',
  //   loadComponent: () =>
  //     import('./almacen/estanterias/estateria1.component').then(
  //       (c) => c.Estanteria1Component
  //     ),
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
