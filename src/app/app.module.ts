  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { RouterModule, Routes } from '@angular/router';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

  import { AngularMaterialModule } from './angular-material.module'; 
  import { HomeComponent } from './home/home.component';

  const routes: Routes = [
    { path: '', component: HomeComponent } 
  ];
  

  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      AngularMaterialModule, // Ensure this is in the imports array
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      HttpClientXsrfModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }