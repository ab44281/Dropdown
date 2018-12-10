import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Society } from '../models/society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(public _http: HttpClient) { }

  SocietyUrl = 'https://betterworld.herokuapp.com/society/society';

  getSociety() {
    return this._http.get(this.SocietyUrl);
  }

  // getSociety(): Observable<Society[]>  {
  //   return this._http.get<{soc: Society[]}>(this.SocietyUrl).pipe(map(res => res.soc));
  // }
}
