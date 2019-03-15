import { Injectable, EventEmitter } from "@angular/core";
import { AppRepository } from "../repositories/app.repository";
import { Credentials } from '../utils/credentials';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';

@Injectable()
export class GapiSessionService {
    googleAuth: gapi.auth2.GoogleAuth;

    constructor(
        private appRepository: AppRepository

    ) {
    }

    initClient() {
        return new Promise((resolve,reject)=>{
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: Credentials.API_KEY,
                    clientId: Credentials.AUTH_KEY,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {                   
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
        });
        
    }
    get isSignedIn(): boolean {
        return this.googleAuth.isSignedIn.get();
    }

    signIn() {
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser: gapi.auth2.GoogleUser) => {
            this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }

    signOut(): void {
        this.googleAuth.signOut();
    }
}