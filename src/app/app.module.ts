import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from 'src/environments/environment';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    InfoComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule

  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
