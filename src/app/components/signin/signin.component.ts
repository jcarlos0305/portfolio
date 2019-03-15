import { Component } from "@angular/core";
import { AppContext } from "../../app.context";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
    private appContext: AppContext,
    private router: Router
) {

}

signIn() {
    this.appContext.Session.Gapi.signIn()
        .then(() => {
            if (this.appContext.Session.Gapi.isSignedIn) {
                this.router.navigate(["/dashboard"]);
            }
        });
}

}
