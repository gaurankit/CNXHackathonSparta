import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnInit, OnDestroy} from '@angular/core';
import { DataService } from "./data.service";
import { SocialUser } from "angularx-social-login";
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from "angularx-social-login";


import {MatBottomSheet} from '@angular/material';
import { NotificationlistComponent } from './notificationlist/notificationlist.component';
import { MessagingService } from "./shared/messaging.service";

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,OnDestroy {
  title = 'OnTrip';
  notifications =[];

  mobileQuery: MediaQueryList;
  user:SocialUser;
  isLoggedIn:boolean;
  message;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private authService: AuthService,private data: DataService,
    private route:ActivatedRoute,private router:Router, private bottomSheet: MatBottomSheet , private messagingService: MessagingService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut(): void {
    this.data.changeMessage(undefined);
    window.location.href="/login";
    this.authService.signOut();

    console.log('/login 0');
  }

  ngOnInit() {
    console.log('First Invoke');
    if(this.user===undefined || this.user===null){
      console.log('/login')
        this.router.navigate(['/login']);
    }else{
      console.log('/home 1');
      this.router.navigate(['/home']);
    }
    this.data.currentMessage.subscribe(user => {
      this.user = user;
      if(user){
        const userId = this.user.provider + '/' + this.user.id;
        this.messagingService.requestPermission(userId);
        this.messagingService.receiveMessage();
        this.message = this.messagingService.currentMessage;        
        }
    });    
  }

  showNotifications(){
    this.bottomSheet.open(NotificationlistComponent);
  }
}