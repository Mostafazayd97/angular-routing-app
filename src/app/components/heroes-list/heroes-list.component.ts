import { Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanComponentDeactivate } from '../../guard/auth.guard';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent implements CanComponentDeactivate {
  hasUnsavedChanges:boolean =true
    canDeactivate():boolean {
    alert('are you sure you want not save ?')
    return this.hasUnsavedChanges
  };

}
