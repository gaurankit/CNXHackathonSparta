import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginscreenComponent },
  { path: 'home', component: HomescreenComponent },
  { path: 'transfers', component: TransfersComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
