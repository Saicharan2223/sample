import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {map} from "rxjs/operators"

import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private RoomURL:string="http://localhost:3000/wsrooms"
  constructor(private ds:DataService) { }
  getRooms(){
    return this.ds.readData(this.RoomURL).pipe(map(responsedata=>responsedata as Room[]))
  }

  addRoom(newRoom:Room){
    return this.ds.createData(this.RoomURL,newRoom).pipe(map(responsedata=>responsedata as Room))
  }

  updateRoom(modifiedRoom:Room){
    return this.ds.updateData(this.RoomURL,modifiedRoom).pipe(map(responsedata=>responsedata as Room))
    
  }
  deleteRoom(id:number){
    return this.ds.deleteData(this.RoomURL,id)
  }
}
