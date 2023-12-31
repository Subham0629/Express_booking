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
import { EventListComponent } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FetchParticipantsComponent } from './fetch-participants/fetch-participants.component';
import { FetchEventsComponent } from './fetch-events/fetch-events.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider-component/slider-component.component';
import { FetchAllUsersComponent } from './fetch-all-users/fetch-all-users.component';
import { FooterComponent } from './footer/footer.component';


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
    MovieComponent,
    EventListComponent,
    AddEventComponent,
    FetchParticipantsComponent,
    FetchEventsComponent,
    SliderComponent,
    FetchAllUsersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatSliderModule,
    BrowserAnimationsModule  
  ],
  providers: [AuthenticationService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
