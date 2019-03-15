import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from './app-routing.module';
import { AppComponent } from "./app.component";
import { GapiSessionService } from './services/gapi-session.service';
import { AppRepository } from './repositories/app.repository';
import { UserRepository } from './repositories/user.repository';
import { AppContext } from './app.context';
import { FileRepository } from './repositories/file.repository';
import { AppSessionService } from './services/app-session.service';
import { FileSessionService } from './services/file-session.service';
import { UserSessionService } from './services/user-session.service';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';

export function initGapi(gapiSessionService: GapiSessionService) {
  return () => gapiSessionService.initClient();
}

@NgModule({
  declarations: [AppComponent, DashboardComponent, SigninComponent],
  imports: [BrowserModule, routing],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSessionService], multi: true },
    AppContext,

    AppSessionService,
    FileSessionService,
    GapiSessionService,
    UserSessionService,

    AppRepository,
    FileRepository,
    UserRepository,

    LoggedInGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
