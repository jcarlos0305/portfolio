import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class FileSessionService {
    public uploadFinished : EventEmitter<any> = new EventEmitter();
}