import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private _http: HttpClient,
              public loginService: LoginService) {}

  
  currentuser = this.loginService.username;

  getPackages(){
    return this._http.get('https://cors-anywhere.herokuapp.com/https://courierdemo.azurewebsites.net/api/packages/getPending?username=' + this.currentuser);
  }

}