import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  apiUrl = 'https://portfolio-233715.appspot.com/api/assets';

  constructor(private http: HttpClient) { }

  getAssets() {
    return this.http.get(this.apiUrl);
  }
}
