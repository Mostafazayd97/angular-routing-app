import { Routes } from '@angular/router';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AuthGuard, canDeactivateGuard, CanMatchGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroComponent } from './components/heroes-list/hero/hero.component';
import { HeroResolver } from './resolver/hero.resolver';
import { FragmentsExampleComponent } from './components/fragments-example/fragments-example.component';

export const routes: Routes = [
    { path: 'crisis-list', component: CrisisListComponent },
    {
        path: 'heroes-list', component: HeroesListComponent, canMatch: [CanMatchGuard],
        canDeactivate: [canDeactivateGuard],
    },
    { path: 'page', component: FragmentsExampleComponent },
    {
    path: 'heroes-list/:id', component: HeroComponent, resolve: { hero: HeroResolver }
    },
    { path: '**', component: PageNotFoundComponent }
];
