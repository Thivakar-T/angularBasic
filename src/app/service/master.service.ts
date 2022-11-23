import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl=environment.serverURL;
  private apiRoot =this.baseUrl+ "api/BedType/createBedType";
  constructor(
    private http:HttpClient
  ) { }
//   getData(symbol: string): Observable<any> {
//     // Tried adding headers with no luck
//     const headers = new Headers();
//     headers.append('Access-Control-Allow-Headers', 'Content-Type');
//     headers.append('Access-Control-Allow-Methods', 'GET');
//     headers.append('Access-Control-Allow-Origin', '*');

//     return this._http.get(this.apiRoot + "symbol=" + symbol + "&type=daily&startDate=20150311000000", {headers: headers})
//         .map(response => response.json());
// }
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

 bed(data:any){
  return this.http.post(this.apiRoot, data); 
// this.http.post<any>.subscribe(arg => this.property = arg);

 }
}
