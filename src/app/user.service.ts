import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // public authtoken=localStorage.getItem('token')||'null';
  constructor(private _http:HttpClient) { }
  resisterUser(user:any){
    return this._http.post<{message:string,users:any}>(environment.baseUrlUser+'/register',user);
  }
  loginUser(loginuser:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrlUser+'/login',loginuser);
  }
  // listContacts(){
  //   return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact);
  // }
  isLoggedIn(){
    if(localStorage.getItem('token') === null)
      {
        return false
      }
    else
      {
        // return !this.jwt.isTokenExpired(localStorage.getItem('token') ?? 'null' )
        // return !!this.authtoken;
        return !!localStorage.getItem('token');
      }
  }
 
}
