import { Component, OnInit } from '@angular/core';
import { TRIPS } from '../mock.trips';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  trips = TRIPS;
  lat;
  lng;
  constructor() { }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lng = position.coords.longitude;
        this.lat = position.coords.latitude;
        console.log(`longitude: ${this.lng} | latitude: ${this.lat}`);
      });

    }
  }


}
