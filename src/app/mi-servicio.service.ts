import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://quotes.stormconsultancy.co.uk/random.json';
  }
  getQuotes(): Observable<any> {
    return (this.http.get(this.url));
  }
}
