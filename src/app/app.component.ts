import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterModule],
  // templateUrl: './app.component.html',
  template: ` <main>
    <a [routerLink]="['/']">
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true">
  </header>
    </a>
  <section class="content">
    <router-outlet/>
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anand Homes';
}
