import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeComponent } from './employe/employe.component';
import { EmployeserviceService } from './service/employeservice.service';
import { AddEmployeComponent } from './add-employe/add-employe.component';



const routes: Routes = [
  {path:'employe', component:EmployeComponent},
  {path:'add-employe', component:AddEmployeComponent}


];

 @NgModule({
  declarations: [
  AppComponent,
   EmployeComponent,
   AddEmployeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  exports: [RouterModule],
  providers: [EmployeserviceService],
  bootstrap: [AppComponent]
 }) 

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppModule { }
