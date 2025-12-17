import { Routes } from '@angular/router';
import {Home} from './_pages/home/home';
import {Bio} from './_pages/bio/bio';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:Home},
  {path:"bio", component:Bio},
];
