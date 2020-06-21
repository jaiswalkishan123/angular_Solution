import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
_url='http://localhost:3000/login';
  constructor(private _http:HttpClient) { }
login(user:User) {
  return this._http.post<any>(this._url,user);
}
}
