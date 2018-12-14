import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(new SocialUser());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: SocialUser) {
    this.messageSource.next(message)
  }

}