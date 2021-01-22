import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) {}
  

  login(username: string, password: string){
    return this._http.post('https://cors-anywhere.herokuapp.com/https://courierdemo.azurewebsites.net/api/membership/login', {
      username: username, 
      password: password
    });
  }

}
