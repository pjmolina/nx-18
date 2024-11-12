import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lib3Component } from '@nx0/lib3';

@Component({
  standalone: true,
  imports: [RouterModule, Lib3Component],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxapp1';
}
