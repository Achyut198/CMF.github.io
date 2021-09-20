import { Component, OnInit } from '@angular/core';
// import{RegModel}from '../reg-model';
import{User}from '../user';
import { UserService } from '../user.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
  public user=new User('','','','');
  public message!:string;
  public isError:boolean=false;
  public isSucess:boolean=false;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      {
        this._router.navigate(['/post/list'])
       
      }
    else{
      
    }
  }   
  
  
  onSubmit(){
    this._userService.resisterUser(this.user).subscribe(response=>{
      // this.message=response.message;
      this.message="resister successfully";
      this.isSucess=true;
      this.isError=false;
      console.log(response)
    },err=>{
      this.message=err.error.message;
      this.isSucess=true;
      this.isError=false;
      console.log(err);
    })
    console.log(this.user);
  }

}
