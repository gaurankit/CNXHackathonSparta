import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { catchError, map } from 'rxjs/operators';



function createHttpOptions(packageName: string, refresh = false) {
  // npm package name search api
  // e.g., http://npmsearch.com/query?q=dom'
  const params = new HttpParams({ fromObject: { q: packageName } });
  const headerMap = refresh ? { 'x-refresh': 'true' } : {};
  const headers = new HttpHeaders(headerMap);
  return { headers, params };
}

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})

export class TransfersComponent implements OnInit {
  lat;
  lng;

  private handleError: HandleError;
  constructor(private http: HttpClient
    //, private httpErrorHandler: HttpErrorHandler
  ) {
    //this.handleError = httpErrorHandler.createHandleError('HeroesService'); 

  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lng = position.coords.longitude;
        this.lat = position.coords.latitude;
        console.log(`longitude: ${this.lng} | latitude: ${this.lat}`);
      });
    }
  }


  getRideEstimate(): void {
 
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-tokenBearer JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAADvUiUZIgJ9fZR94dUm3Kt9sAAAAw4weKCybGWI6IPeM4MXjC9Dc0FbTasZYH2s_KzY-iRgSHNRRXGBig1twofIcF_MA40I9WLabMl4n0C3qkES9OXa8YVAsjs30uVUxHeL5ZEsYZCB8zE0fZ9b0xwAivKMAdE_A64NQ-U7G4oS6DAAAAB7MsjSqhq9aO9h5DCQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU',
        'Accept-Language': 'en-US'
      })
    }

    // TODO: Add error handling
    this.http.post("http://api.uber.com/v1.2/requests/estimate",
      {
        'start_latitude': 37.7752278,
        'start_longitude': -122.4197513,
        'end_latitude': 37.7773228,
        'end_longitude': -122.4272052
      }).pipe(
        map((data: any) => {
          return data.results.map(entry => ({
              name: entry.name[0],
              version: entry.version[0],
              description: entry.description[0]
            })
          );
        }),
        
      )
    //new HttpHeaders({'Content-Type':'application/json':'Authorization':"Bearer JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAADvUiUZIgJ9fZR94dUm3Kt9sAAAAw4weKCybGWI6IPeM4MXjC9Dc0FbTasZYH2s_KzY-iRgSHNRRXGBig1twofIcF_MA40I9WLabMl4n0C3qkES9OXa8YVAsjs30uVUxHeL5ZEsYZCB8zE0fZ9b0xwAivKMAdE_A64NQ-U7G4oS6DAAAAB7MsjSqhq9aO9h5DCQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU":'Accept-Language':'en-US'}))
    //this.http.get("https://api.uber.com/v1.2/requests/estimate", options)


    //.pipe(
    //  map((data: any) => {
    //  return data.results.map(entry => {
    //  debugger;
    //});
    //})
    //,catchError(this.handleError('search', [])) 
    //);

  }



}
