import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})

export class TransfersComponent implements OnInit {
  lat;
  lng;

  constructor() { 
    var http: HttpClient    
  }



  ngOnInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
            console.log(`longitude: ${ this.lng } | latitude: ${ this.lat }`);         
        });
    }
  }

  
  getRideEstimate(): void {
    
    console.log('Calling Uber !!!!!!!!!!!!');
      
  }

}
