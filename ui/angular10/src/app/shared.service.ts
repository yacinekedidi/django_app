import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl = "http://127.0.0.1:8000";


  constructor(private http:HttpClient) { }

  getFamList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/family/');
  }

  addFamily(val:any){
  return this.http.post(this.APIUrl + '/family/',val);
  }

  updateFamily(val:any){
  return this.http.put(this.APIUrl + '/family/',val);
  }

  deleteFamily(val:any){
  return this.http.delete(this.APIUrl + '/family/'+val);
  }


  getOrphList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/orphan/');
  }

  addOrphan(val:any){
  return this.http.post(this.APIUrl + '/orphan/',val);
  }

  updateOrphan(val:any){
  return this.http.put(this.APIUrl + '/orphan/',val);
  }

  deleteOrphan(val:any){
  return this.http.delete(this.APIUrl + '/orphan/'+val);
  }

 
  getAllFamilyNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/family/');
  }
}
