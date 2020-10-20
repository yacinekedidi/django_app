import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  constructor() { }
  @Input() fam:any;
  id:any;
  cin:string;
  first_name:string;
  last_name:string;
  sex:string;
  birthdate:any;
  address:string;
  phone:string;
  health_insurance:string;
  job:string;
  income:any;
  home_status:string;
  home_owner:string;
  health_status:string;
  deceased_parent_name:string;
  cause_of_death:string;
  sponsor_name:string;
  family_status:string;
  

  ngOnInit(): void {
    this.id=this.fam.id;
    this.cin=this.fam.cin;
    this.first_name=this.fam.first_name;
    this.last_name=this.fam.last_name;
    this.sex=this.fam.sex;
    this.birthdate=this.fam.birthdate;
    this.address=this.fam.address;
    this.phone=this.fam.phone;
    this.health_insurance=this.fam.health_insurance;
    this.job=this.fam.job;
    this.income=this.fam.income;
    this.home_status=this.fam.home_status;
    this.home_owner=this.fam.home_owner;
    this.health_status=this.fam.health_status;
    this.deceased_parent_name=this.fam.deceased_parent_name;
    this.cause_of_death=this.fam.cause_of_death;
    this.sponsor_name=this.fam.sponsor_name;
    this.family_status=this.fam.family_status;
  }


}
