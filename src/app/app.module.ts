import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/component/login/login.component';
import { AddComponent } from './user/add/add.component';
import { ViewComponent } from './user/view/view.component';
import { EditComponent } from './user/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
