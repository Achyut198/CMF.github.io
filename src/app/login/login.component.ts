import { Component, OnInit } from '@angular/core';
// import{User}from '../reg-model';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSucess:boolean=false;
  public email !:string;
  public password !:string;
  // public user=new User('','','','');
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      {
        this._router.navigate(['/post/list'])
       
      }
    else{
      
    }
  } 
  onlogin(){
    const loginInfo={
      email:this.email,
      password:this.password
    }
    this._userService.loginUser(loginInfo).subscribe(Response=>{
      this.message=Response.message
      this.isError=false
      this.isSucess=true
      localStorage.setItem('token',Response.token);
      localStorage.setItem('userName',Response.userData.name);
      localStorage.setItem('userid',Response.userData.id);
      this._router.navigate(['/post/list']);
      

      console.log(Response);
    },err=>
    {
      this.message=err.error.message
      this.isError=false
      this.isSucess=true
      console.log(err);
    })
    //console.log(this.user);
  }

}
