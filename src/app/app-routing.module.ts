import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NumerosComponent } from './pages/numeros/numeros.component';


const routes:Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'numeros', component: NumerosComponent},

  {path: '', pathMatch: 'full', redirectTo:'/home'},
  {path: '**', pathMatch: 'full', redirectTo:'/home'}

]

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
