import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { NotificationlistComponent } from './notificationlist/notificationlist.component';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransfersComponent } from './transfers/transfers.component';
import { HttpClientModule } from '@angular/common/http';



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("316130857730-agp0gtj8lch8f0l0gr6m02tcr7ehg3ml.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    LoginscreenComponent,
    HomescreenComponent,
    BottomnavComponent,
    NotificationlistComponent,
    TransfersComponent
  ],
  entryComponents: [NotificationlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule  {

}
