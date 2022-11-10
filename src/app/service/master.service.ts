import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private http:HttpClient
  ) { }

  isLoggedIn(){
    const name= localStorage.getItem("name");
    if(name==""||name==null){
      return false
    }
    else{ return true}
  }
  isRole(menuname:any){
    const role= localStorage.getItem("role");
    console.log(role)
    if(role=='"admin"'){
      return true
    }else{
      if(menuname=="pages"){
        return true
      }
      else{ return false}
     
    }
  }
}
