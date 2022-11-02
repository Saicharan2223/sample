import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NotFoundComponent } from './menulinks.components';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

let appRoutes:Routes=[{path:"home",component:HomeComponent},{path:"",redirectTo:"home",pathMatch:"full"},{path:"admin",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},{path:"**",component:NotFoundComponent}]

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,CommonModule,UserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
