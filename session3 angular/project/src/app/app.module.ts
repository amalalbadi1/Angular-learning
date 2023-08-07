import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProdectComponent } from './prodect/prodect.component';
import { RegsterComponent } from './regster/regster.component'
import {ReactiveFormsModule}from '@angular/forms';
import { GithupComponent } from './githup/githup.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdectComponent,
    RegsterComponent,
    GithupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
