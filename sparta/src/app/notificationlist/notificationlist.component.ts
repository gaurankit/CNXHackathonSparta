import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.component.html',
  styleUrls: ['./notificationlist.component.css']
})
export class NotificationlistComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<NotificationlistComponent>) { 
    
  }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
