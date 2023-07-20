import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashboardComponent,
    children: [
      { path: 'movie-form', component: MovieFormComponent }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
