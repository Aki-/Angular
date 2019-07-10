import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';

import { FormsModule } from "@angular/forms";
import { TwoWayComponent } from '../app/data-binding/two-way/two-way.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
