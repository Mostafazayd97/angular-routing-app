import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../model/Hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hero!: Hero;

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    // Access the resolved hero from the route's data
    this.route.data.subscribe(data => {
      this.hero = data['hero'];
    });
  }

  goBack(): void {
    this.router.navigate(['/heroes-list']);
  }
}
