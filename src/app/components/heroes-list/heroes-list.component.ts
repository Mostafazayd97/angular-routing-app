import { Component } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router, RouterOutlet } from '@angular/router';
import { CanComponentDeactivate } from '../../guard/auth.guard';
import { CommonModule } from '@angular/common';
import { hero } from '../../model/Hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})

export class HeroesListComponent implements CanComponentDeactivate {
  heroes = hero
  hasUnsavedChanges:boolean =true
    canDeactivate():boolean {
    alert('are you sure you want not save ?')
    return this.hasUnsavedChanges
  };
  constructor(private router:Router,private route:ActivatedRoute){

  }

  toHeroPage(id:number){
    this.router.navigate(['../heroes-list',id] ,{relativeTo:this.route})
  }
}
