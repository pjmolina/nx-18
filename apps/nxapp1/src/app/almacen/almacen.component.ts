import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-almacen',
  imports: [RouterModule],
  template: `<div>
    <p>Esto es el almacen</p>
    <a [routerLink]="['estanteria/1']">Estanteria 1</a> |
    <a [routerLink]="['estanteria/2']">Estanteria 2</a>
  </div>`,
  styles: ``,
})
export class AlmacenComponent {}
