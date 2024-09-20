import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CrisisListComponent } from "./components/crisis-list/crisis-list.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";
import { AuthService } from './services/Auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrisisListComponent, HeroesListComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {
  title = 'angular-router-sample';


  formHasUnsavedChanges = true

  constructor(public authService:AuthService){

  }

  login():void{
    this.authService.loggedIn = true
  }
  logout():void{
    this.authService.loggedIn = false
  }
}
