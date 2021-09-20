import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContService } from 'src/app/cont.service';
import { Cont } from 'src/app/cont';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public userid =localStorage.getItem('userid') || 'null';
  public cont= new Cont('','','','','');
  public message !:string;
  public isSuccess :boolean=false
  public isError:boolean=false

  constructor(private _cs:ContService,private _acroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void
  {
    // this._acroute.params.subscribe(param=>{
    //   this.userid=param.id
    // })
    this.userid=localStorage.getItem('userid') || 'null'
  }
  onSubmitcont(){
    console.log(this.cont)
    this.cont.userid = this.userid;
    this._cs.addContact(this.cont).subscribe(rs=>{
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
