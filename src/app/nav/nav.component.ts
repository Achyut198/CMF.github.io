import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isShow= true
  public uname !:string
  public name!:string

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      {
        this.isShow=false
        // this.uname=localStorage.getItem('fullName')
        this.uname=localStorage.getItem('userName') || ''
      }
    else{
      this.isShow=true
    }
  }
  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userid')
    this.router.navigate(['/'])
  }
  onSearch(name:string){
    this.router.navigate(['/post/search/'+name])
    // document.location.reload()
  }

}
