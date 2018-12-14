import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { DataService } from "../data.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  message:SocialUser;

  constructor(private authService: AuthService,private data: DataService,
    private route:ActivatedRoute,private router:Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    //this.data.changeMessage(this.user);
    this.data.currentMessage.subscribe(message => this.message = message)
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.data.changeMessage(this.user);
      //console.log('/home 2');
      this.router.navigate(['/home']);
    });
  }

}
