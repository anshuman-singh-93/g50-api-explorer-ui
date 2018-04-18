import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LandingComponent} from "./landing/landing.component";
import {DevicesComponent} from "./devices/devices.component";

const routes: Routes = [
  {
    path: 'home',
    component:LandingComponent
  },
  {
    path: 'device/:id',
    component:DevicesComponent
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
  export class AppRoutingModule {}
