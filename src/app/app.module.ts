import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ResisterComponent } from './resister/resister.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './post/list/list.component';
import { AddComponent } from './post/add/add.component';
import { EditComponent } from './post/edit/edit.component';
import { SearchComponent } from './post/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    ResisterComponent,
    PagenotfoundComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
