import { Component, OnInit } from '@angular/core';
import { ContService } from 'src/app/cont.service';
import { Cont } from 'src/app/cont';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public cont= new Cont('','','','','');
  public contactsData:any[]=[]
  // public name!:string
  
  constructor(private _ps:ContService,private route:Router) { }

  ngOnInit(): void {
    this.showContact()
    
    
  }
  showContact(){
    this._ps.listAllContactsByUser().subscribe(Response=>{
      this.contactsData=Response.contactsData;
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
      this.showContact();
      console.log(err);
    })
   
  }

}
