import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'trip', component: TripComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/trip',
    pathMatch: 'full'
  },
  { path: '**', component: TripComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
