import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Pizza {
  id: string;
  name: string;
  url: string;
  price: number;
}

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss',
})
export class PizzaListComponent {
  constructor(private router: Router) {}

  pizzas: Pizza[] = [
    {
      id: 'mar',
      name: 'Margarita',
      url: '/pizzas/mar',
      price: 12,
    },
    {
      id: 'car',
      name: 'Carbonara',
      url: '/pizzas/car',
      price: 13,
    },
    {
      id: 'pin',
      name: 'Piña',
      url: '/pizzas/pin',
      price: 14,
    },
  ];

  detalle(id: string): void {
    const url = `/pizzas/${id}`;
    this.router.navigate([url]);
  }
}
