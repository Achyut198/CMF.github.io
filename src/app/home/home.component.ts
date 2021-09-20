import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { ContService } from '../cont.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _contService:ContService,private _router:Router) { }
  // public contactsData:any[]=[]
  ngOnInit(): void {
    if(localStorage.getItem('token'))
      {
        this._router.navigate(['/post/list'])
       
      }
    else{
      
    }
  } 
  // ngOnInit(): void {
    // this._contService.listContacts().subscribe(response=>{
    //   this.contactsData=response.contactsData
    //   console.log(this.contactsData)
    // },err=>console.log(err))
  // }

}
