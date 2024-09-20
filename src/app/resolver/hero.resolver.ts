import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../model/Hero';
import { HeroService } from '../services/hero.service';

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<Hero> {
    constructor(private heroService: HeroService) {

    }
    resolve(route: ActivatedRouteSnapshot): Observable<Hero> | Promise<Hero> | Hero  {
        const id = +route.paramMap.get('id')!;
            return this.heroService.getHero(id);;

    }
}