import { Injectable } from '@angular/core';
import { Hero, hero } from '../model/Hero';

@Injectable({providedIn: 'root'})
export class HeroService {
    heros = hero
    constructor() { }


    getAllHeros(){
        return this.heros
    }

    getHero(id:number):Hero{
        return this.heros.find(hero => hero.id = id)!
    }
    
}