import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrisisListComponent } from "./components/crisis-list/crisis-list.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrisisListComponent, HeroesListComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-router-sample';
}
