import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { GapiSessionService } from "./gapi-session.service";

@Injectable()
export class LoggedInGuardService implements CanActivate {

    constructor (
        private router:Router,
        private gapiSession: GapiSessionService){
        
    }
    canActivate(){
        var isLoggedIn = this.gapiSession.isSignedIn;
        if (!isLoggedIn)
            this.router.navigate(['/signin']);
        return isLoggedIn;
    }
}