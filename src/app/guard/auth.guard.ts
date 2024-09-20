import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Route,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { CanMatchFn, UrlSegment } from '@angular/router';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const authService = inject(AuthService)
    if (authService.isAuthenticated()) {
        return true
    } else {
        alert('you must be login')
        router.navigate(['/crisis-list'])

        return false
    }
};


export const CanMatchGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    const router = inject(Router);
    const authService = inject(AuthService)
    if (authService.isAuthenticated()) {
        return true
    } else {
        alert('you must be login')
        router.navigate(['/crisis-list'])

        return false
    }
}

import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class VillainsComponent implements CanComponentDeactivate { ...
//
export interface CanComponentDeactivate {
    canDeactivate: () => boolean;
}


export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate
) => {
    if (component.canDeactivate()) {
        console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - allowed`);
        return true;
    } else {
        alert('Are you sure you want to leave?');
        return false;
    }
};