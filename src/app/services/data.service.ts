import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  readData(url:string){
    return this.http.get(url)
  }
  createData(url:string,newdata:any){
    return this.http.post(url,newdata)
  }

  updateData(url:string,modifieddata:any){
    return this.http.put(url+"/"+modifieddata.id,modifieddata)
  }
  deleteData(url:string,id:number){
    return this.http.delete(url+"/"+id)
  }
}
