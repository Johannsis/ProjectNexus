import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private _http: HttpClient) {}
  
  readonly user: string = "jsanchez";

  getPackages(){
    return this._http.get('https://cors-anywhere.herokuapp.com/https://courierdemo.azurewebsites.net/api/packages/getPending?username=' + this.user);
  }

}