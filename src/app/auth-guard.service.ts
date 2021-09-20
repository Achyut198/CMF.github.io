import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { CanDeactivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuardService implements CanActivate{
export class AuthGuardService{
  constructor(private user:UserService,private router:Router) { }

  canActivate(){
    console.log("log status :"+this.user.isLoggedIn())
    if(!this.user.isLoggedIn())
    {
      console.log("token needed")
      this.router.navigate(["/login"])
     
      return false
    }
    return true
  }
  
  
}

// export class AuthGuardService1{
//   constructor(private user:UserService,private router:Router) { }
  
//   canDeactivate(){
//     // console.log("log status :"+this.user.isLoggedIn())
//     if(!this.user.isLoggedIn())
//     {
//       console.log("token present")
//       this.router.navigate(["/post/list"])
     
//       return false
//     }
//     return true
//   }
  
  
// }
