import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getFamList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/family/');
  }

  getFamById(val: any) {
    return this.http.get(this.APIUrl + '/family/', val);
  }

  addFamily(val: any) {
    return this.http.post(this.APIUrl + '/family/', val);
  }

  updateFamily(val: any) {
    return this.http.put(this.APIUrl + '/family/', val);
  }

  deleteFamily(val: any) {
    return this.http.delete(this.APIUrl + '/family/' + val);
  }

  getOrphList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/orphan/');
  }

  getOrphById(val: any) {
    return this.http.get(this.APIUrl + '/orphan/', val);
  }

  addOrphan(val: any) {
    return this.http.post(this.APIUrl + '/orphan/', val);
  }

  updateOrphan(val: any) {
    return this.http.put(this.APIUrl + '/orphan/', val);
  }

  deleteOrphan(val: any) {
    return this.http.delete(this.APIUrl + '/orphan/' + val);
  }

  getSubList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/subsidy/');
  }

  getSubById(val: any) {
    return this.http.get(this.APIUrl + '/subsidy/', val);
  }

  addSubsidy(val: any) {
    return this.http.post(this.APIUrl + '/subsidy/', val);
  }

  updateSubsidy(val: any) {
    return this.http.put(this.APIUrl + '/subsidy/', val);
  }

  deleteSubsidy(val: any) {
    return this.http.delete(this.APIUrl + '/subsidy/' + val);
  }

  getAllFamilyNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/family/');
  }

  getOrphEducationList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/orphaneducation/');
  }

  getOrphEducationById(val: any) {
    return this.http.get(this.APIUrl + '/orphaneducation/', val);
  }

  addOrphEducation(val: any) {
    return this.http.post(this.APIUrl + '/orphaneducation/', val);
  }

  updateOrphEducation(val: any) {
    return this.http.put(this.APIUrl + '/orphaneducation/', val);
  }

  deleteOrphEduction(val: any) {
    return this.http.delete(this.APIUrl + '/orphaneducation/' + val);
  }

  //family_subsidy
  getFamSubList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/familysubsidy/');
  }

  getFamSubById(val: any) {
    return this.http.get(this.APIUrl + '/familysubsidy/', val);
  }

  addFamSub(val: any) {
    return this.http.post(this.APIUrl + '/familysubsidy/', val);
  }

  updateFamSub(val: any) {
    return this.http.put(this.APIUrl + '/familysubsidy/', val);
  }

  deleteFamSub(val: any) {
    return this.http.delete(this.APIUrl + '/familysubsidy/' + val);
  }
}
