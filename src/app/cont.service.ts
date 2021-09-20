import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { string } from 'joi';
import { Cont } from './cont';

@Injectable({
  providedIn: 'root'
})
export class ContService {

  constructor(private _http:HttpClient) { }
  listContacts(){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact);
  }
  listAllContactsByUser()
  {
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact+"/"+localStorage.getItem('userid'),{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    });
  }
  getContactById(id:string)
  {
    return this._http.get<{message:string,contact:any}>(environment.baseUrlContact+'/getbyid/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    });
  }
  updateContact(id:string,cont:any)
  {
    return this._http.put<{message:string,contact:any}>(environment.baseUrlContact+'/update/'+id,cont,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    })
  }
  addContact(cont:any)
  {
    return this._http.post<{message:string,contact:any}>(environment.baseUrlContact+'/save',cont,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    })
  }
  deleteContact(idcon:string)
  {
    return this._http.delete<{message:string}>(environment.baseUrlContact+'/deleteContact/'+idcon,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    });
  }
  getContactByName(name:string)
  {
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact+'/getbyname/'+name,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')??'null')
    });
  }
}
