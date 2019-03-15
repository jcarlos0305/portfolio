import { Injectable } from "@angular/core";
import { UserSessionService } from "./user-session.service";
import { GapiSessionService } from "./gapi-session.service";
import { FileSessionService } from "./file-session.service";

@Injectable()
export class AppSessionService {
    constructor(
        private authSession: GapiSessionService,
        private fileSession: FileSessionService,
        private userSession: UserSessionService
    ) {

    }

    get File():FileSessionService {
        return this.fileSession;
    }
    get Gapi(): GapiSessionService {
        return this.authSession;
    }

    get User(): UserSessionService {
        return this.userSession;
    }


}
