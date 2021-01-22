import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PackagesService]
})
export class HomeComponent implements OnInit {

  packages: any[] = null;

  constructor(private packagesService: PackagesService) {}



  getPackages(){
    this.packagesService.getPackages().subscribe((response: any) => {

      console.log(response);
      
      this.packages=response.responseObject;
      

    })
  }

  ngOnInit(): void{
    this.getPackages();
  }

}
