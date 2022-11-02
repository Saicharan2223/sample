import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router'
import { DialogModule } from "primeng/dialog"
import {ToastModule} from "primeng/toast"
import {ConfirmDialogModule} from "primeng/confirmdialog"
import { TableModule } from "primeng/table"
import { InputNumberModule} from "primeng/inputnumber"
import { InputTextareaModule } from "primeng/inputtextarea"
import { InputTextModule } from "primeng/inputtext"
import { BadgeModule } from "primeng/badge"
import { CardModule} from "primeng/card" 
import {ManageRoomsComponent} from "../user/manage-rooms.component"



const crudRoutes:Routes=[{
//path:"crud",component:CrudComponent,children:[{path:"users",component:UserComponent},{path:"",redirectTo:"users",pathMatch:"full"}]
path:"rooms",component:ManageRoomsComponent
}]
@NgModule({
  declarations: [
    
    ManageRoomsComponent
  ],
  imports: [
    CommonModule, FormsModule,RouterModule.forChild(crudRoutes),DialogModule,ToastModule,ConfirmDialogModule,TableModule,InputNumberModule,InputTextareaModule,InputTextModule,BadgeModule,CardModule
  ],
  exports:[ManageRoomsComponent]
})
export class UserModule { 
  constructor()
  {
    console.log("User Module constructed...")
  }
}
