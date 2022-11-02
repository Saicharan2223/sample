import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {map} from "rxjs/operators"
import {User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL:string="http://localhost:3000/users"
  constructor(private ds:DataService) { }
  getUsers(){
    return this.ds.readData(this.userURL).pipe(map(responsedata=>responsedata as User[]))
  }

  addUser(newUser:User){
    return this.ds.createData(this.userURL,newUser).pipe(map(responsedata=>responsedata as User))
  }

  updateUser(modifiedUser:User){
    return this.ds.updateData(this.userURL,modifiedUser).pipe(map(responsedata=>responsedata as User))
    
  }
  deletUser(id:number){
    return this.ds.deleteData(this.userURL,id)
  }
}