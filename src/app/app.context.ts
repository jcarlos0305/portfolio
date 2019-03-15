import { Injectable } from "@angular/core";
import { AppSessionService } from "./services/app-session.service";
import { AppRepository } from "./repositories/app.repository";

@Injectable()
export class AppContext {

    constructor(
        private appRepository: AppRepository,
        private appSessionService: AppSessionService
    ) {

    }

    get Repository(): AppRepository {
        return this.appRepository;
    }
    
    get Session(): AppSessionService {
        return this.appSessionService;
    }
}