import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthenticationService } from './authentication.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminComponent } from './admin/admin.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieService } from './movie.service';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddShowComponent } from './add-show/add-show.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserRegistrationComponent,
    UpdateProfileComponent,
    AdminComponent,
    MovieFormComponent,
    AdmindashboardComponent,
    AddShowComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule  
  ],
  providers: [AuthenticationService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
