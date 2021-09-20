import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContService } from 'src/app/cont.service';
import { Cont } from 'src/app/cont';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // public contact:any[]=[]
  public userid !:string;
  public cont= new Cont('','','','','');
  public message !:string;
  public isSuccess :boolean=false
  public isError:boolean=false

  constructor(private _cs:ContService,private _acroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void
  {
    this._acroute.params.subscribe(param=>{
      this.userid=param.id
    })
    this._cs.getContactById(this.userid).subscribe(rs=>{
      // this.contact=rs.contact;

      console.log(rs);
      this.userid=rs.contact._id
      this.cont.name=rs.contact.name
      this.cont.email=rs.contact.email
      this.cont.phone=rs.contact.phone
      this.cont.type=rs.contact.type
      this.cont.userid=rs.contact.userid

    },err=>{
      console.log(err)
    })
  }
  onSubmitcont(){
    console.log(this.cont)

    this._cs.updateContact(this.userid,this.cont).subscribe(rs=>{
      this.message = rs.message
      this.isError = false
      this.isSuccess = true
      this.route.navigate(['post/list'])
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
  }
  

}
