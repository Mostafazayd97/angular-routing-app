import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService {

    loggedIn:boolean = false

    constructor() { }

    isAuthenticated(){
        return this.loggedIn
    }

    login():void{
        this.loggedIn = true
    }
    
    
    logout():void{
        this.loggedIn = false
    }
}