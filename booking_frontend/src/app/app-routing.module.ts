import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
// import { UserManagementComponent } from './user-management/user-management.component';
// import { MovieManagementComponent } from './movie-management/movie-management.component';
// import { ShowManagementComponent } from './show-management/show-management.component';
// import { EventManagementComponent } from './event-management/event-management.component';
// import { ParticipantManagementComponent } from './participant-management/participant-management.component';

const routes: Routes = [
  { path: 'movies', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'signup', component: UserRegistrationComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  // { path: 'movies', component: MovieComponent },
  // { path: 'shows', component: ShowComponent },
  // { path: 'events', component: EventComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
