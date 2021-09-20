import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './post/list/list.component';
import { EditComponent } from './post/edit/edit.component';
import { AddComponent } from './post/add/add.component';
import { ResisterComponent } from './resister/resister.component';
import { AuthGuardService } from './auth-guard.service';
import { SearchComponent } from './post/search/search.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"resister",component:ResisterComponent},
  {path:"post/list",component:ListComponent,canActivate:[AuthGuardService]},
  {path:"post/edit/:id",component:EditComponent,canActivate:[AuthGuardService]},
  {path:"post/add",component:AddComponent,canActivate:[AuthGuardService]},
  {path:"post/search/:name",component:SearchComponent,canActivate:[AuthGuardService]},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
