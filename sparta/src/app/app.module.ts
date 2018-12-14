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

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
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
    BottomnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule  {

}
