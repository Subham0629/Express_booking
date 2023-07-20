import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { AddShowComponent } from './add-show/add-show.component';
import { MovieComponent } from './movie/movie.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FetchParticipantsComponent } from './fetch-participants/fetch-participants.component';
import { FetchEventsComponent } from './fetch-events/fetch-events.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'signup', component: UserRegistrationComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]  },
  { path: 'admin/movie-form', component: MovieFormComponent , canActivate: [AuthGuard]},
  { path: 'admin/add-show/:movie_id', component: AddShowComponent , canActivate: [AuthGuard]},
  { path: 'admin/add-event', component: AddEventComponent , canActivate: [AuthGuard]},
  { path: 'admin/fetch-participants', component: FetchParticipantsComponent , canActivate: [AuthGuard]},
  { path: 'admin/fetch-events', component: FetchEventsComponent , canActivate: [AuthGuard]},
  { path: 'movies', component: MovieComponent },
  { path: 'user-login', component: UserRegistrationComponent },
  { path: 'events', component: EventListComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
