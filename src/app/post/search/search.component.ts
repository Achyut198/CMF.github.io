import { Component, OnInit } from '@angular/core';
import { ContService } from 'src/app/cont.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cont } from 'src/app/cont';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public contactsData:any[]=[]
  public name!:string
  public cont= new Cont('','','','','');

  constructor(private _ps:ContService,private route:Router,private _acroute:ActivatedRoute) { 
    this._acroute.params.subscribe(param=>{
      this.name=param.name
    })
  }

  ngOnInit(): void {
    this.getContactByName(this.name);
    
    
  }
  getContactByName(name:string){
    this._ps.getContactByName(name).subscribe(Response=>{
      this.contactsData=Response.contactsData;
      // this.contactsData.push(Response.contactsData)
      console.log(this.contactsData)

    },err=>{
      console.log(err);
    })
  }
  onDelete(cont:any){
    this._ps.deleteContact(cont._id).subscribe(response=>{
      // this.showContact();
      this.route.navigate(['post/list'])
    },err=>{
     
      console.log(err);
    })
   
  }
  

}
