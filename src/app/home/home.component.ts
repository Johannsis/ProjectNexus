import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PackagesService]
})
export class HomeComponent implements OnInit {


  packages: any[] = null;

  constructor(private packagesService: PackagesService,
              public loginService: LoginService) {}

  getPackages(){
    this.packagesService.getPackages().subscribe((response: any) => {
      
      this.packages=response.responseObject;

    })
  }

  ngOnInit(): void{
    this.getPackages();
  }

}
