import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false 
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],

  exports: [RouterModule]

})
export class AppRoutingModule { }