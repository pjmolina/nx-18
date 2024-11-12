import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.scss',
})
export class PizzaDetailComponent implements OnInit, OnDestroy {
  id: string | null = '-';
  sub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');

    this.sub = this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('cambio de parametros id=' + this.id);

      // this.pizzaService.GetById(id).sub(pizza -> )
    });

    this.route.queryParamMap.subscribe((queryParam) => {
      const valores = queryParam.getAll('a');
      console.log(valores);
    });
  }

  ngOnDestroy(): void {
    console.log('destruido');

    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

  volver(): void {
    this.router.navigate(['/inicio'], { queryParams: { a: 42 } });
  }
}
