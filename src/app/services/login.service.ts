import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: string = null;

  constructor(public _http: HttpClient) {}
  

  public login(username: string, password: string){
    return this._http.post('https://cors-anywhere.herokuapp.com/https://courierdemo.azurewebsites.net/api/membership/login', {
      username: username, 
      password: password
    });
  }

}
