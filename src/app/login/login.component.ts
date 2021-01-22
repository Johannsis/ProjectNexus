import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  public username: string = null;
  public password: string = null;
  public pruebaLogin: number = 3;
  public regExp: RegExp = /^[a-zA-Z0-9]*$/;

  constructor(private loginService: LoginService,
              private router:Router) { }

  public isEmptyOrSpaces(text: string): boolean {

    return !text || text.trim() === "";
  };

  public validateLogin(): boolean {
    if (this.isEmptyOrSpaces(this.username) || this.isEmptyOrSpaces(this.password)){
      alert("No deje ninguna casilla vacia.");
      return false;
    }
    if(this.username.length == 0 || this.password.length == 0){
      alert("Escriba su info.");
      return false;
    }
    if(this.username.length > 10 || this.password.length > 10){
      alert("Numero de caracteres superados.");
      return false;
    }
    if(!this.regExp.test(this.username) || !this.regExp.test(this.password)){
      alert("No se aceptan caracteres especiales.");
      return false;
    }
    return true;
  }

  public login(): void {
    if(!this.validateLogin()){
      return;
    }

    this.loginService.login(this.username,this.password).subscribe((response: any) => {
      if (response.success === true){
        this.router.navigate(['/home']);
      } else{
        if(this.pruebaLogin > 0){
          this.pruebaLogin--;
          alert("Pruebas faltantes: " + this.pruebaLogin);
        }
      }
    });
  }
}
