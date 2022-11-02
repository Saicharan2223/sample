import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Room } from '../models/room.model';
import { RoomService } from '../services/rooms.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-room.component.html',
  styles: [
  ],
  providers: [MessageService,ConfirmationService,MessageService]
})
export class ManageRoomsComponent implements OnInit {
  rooms:Room[] = []

  roomDialog:boolean = false
  frmRoom:Room = new Room(0,"",0,"","",0)

  constructor(private rSvc:RoomService,private msgSvc:MessageService,private confirmSvc:ConfirmationService) { }

  ngOnInit(): void {
    this.getAllrooms()
  }
  getAllrooms(){
    this.rSvc.getRooms().subscribe({
      next: (data) => this.rooms=data,
      error:(err)=>console.log("Error Occured",err)
    })
  }

  addRoom() {
    this.roomDialog = true
    this.frmRoom = new Room(0,"",0, "","",0)
  }

  hideDialog() {
    this.roomDialog = false
  }

  save()
   {
    if(this.frmRoom.id==0){
      this.rSvc.addRoom(this.frmRoom).subscribe({
        next:(data)=>{
          
          this.getAllrooms()
          this.msgSvc.add({severity:"success",summary:'Success',detail:'Room Added',life:3000})
        },
        error: (err)=>{
          this.msgSvc.add({severity:"error",summary:'Error',detail:'Error occured',life:3000})
        }
      })
    }
    else{
      this.rSvc.updateRoom(this.frmRoom).subscribe({
        next:(data)=>{
          
          this.getAllrooms()
          this.msgSvc.add({severity:"success",summary:'Success',detail:'Room Updated',life:3000})
        },
        error: (err)=>{
         
          this.msgSvc.add({severity:"error",summary:'Error',detail:'Error occured',life:3000})
        }
      })
    }
    this.frmRoom=new Room(0,"",0,"","",0)
    this.roomDialog = false
  }

  edit(selectedRoom:Room) {
    this.roomDialog = true
    Object.assign(this.frmRoom, selectedRoom)
  }
  delete(selectedRoom:Room)
  {
    this.confirmSvc.confirm(
      {message:`Are you sure want to delete ${selectedRoom.name}`,
      header:'Confirm',
      icon:'pi pi-exclamation-triangle',
       accept: ()=>{
          this.rSvc.deleteRoom(selectedRoom.id).subscribe({
          next:()=>{
          this.getAllrooms()
          this.msgSvc.add({severity:"success",summary:'Success',detail:`${selectedRoom.name}  Deleted successfully`,life:3000})
         },
          error:(err)=>this.msgSvc.add({severity:"error",summary:'Error',detail:'Error occured',life:3000})
        })
      }
    })
  }
}
