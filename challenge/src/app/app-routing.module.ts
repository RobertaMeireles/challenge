import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GeneratorComponent } from './generator/generator.component';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "generator",
    component: GeneratorComponent
  },
  {
    path: "payments",
    component: PaymentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
