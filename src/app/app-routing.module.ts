import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login } from "../pages/login"
import { Home } from "../pages/home"

const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'home',
    component: Home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
