import { ContactoComponent } from './components/contacto/contacto.component';
import { ComentsComponent } from './components/coments/coments.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';


const routes: Routes = [ //PARAUSAR LAS RUTAS PARA ACCEDER
{path:'', component: HomeComponent} ,
{path:'user/login', component: LoginComponent},
{path:'inf/:id', component: DetailsComponent},
{path:'user/register', component: RegisterComponent},
{path:'user/profile', component: ProfileComponent},
{path: 'nosotros' , component: NosotrosComponent},
{path: 'contacto' , component: ContactoComponent},
{path: '**' , component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
