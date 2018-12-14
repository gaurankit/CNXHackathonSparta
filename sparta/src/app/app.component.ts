import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnInit, OnDestroy} from '@angular/core';
import { DataService } from "./data.service";
import { SocialUser } from "angularx-social-login";

/** @title Responsive sidenav */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'OnTrip';
  notifications =  ["Travel reminder", "Weather update", "Change in flight schedule"];

  mobileQuery: MediaQueryList;
  user:SocialUser;
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private data: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ngOnInit() {
    this.data.currentMessage.subscribe(user => this.user = user)
  }

  showNotifications(){
    alert("hi")
  }
}