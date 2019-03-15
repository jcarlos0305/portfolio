import { Injectable } from "@angular/core";
import { AppRepository } from "../repositories/app.repository";

@Injectable()
export class UserSessionService {
    constructor(
        private appRepository: AppRepository
    ) {

    }
}
