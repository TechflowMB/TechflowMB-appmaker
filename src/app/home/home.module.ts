import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];
// shorter, and this is a type route//
//now just tell what component to load//
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]   

})
export class HomeModule { }