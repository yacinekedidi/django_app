import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info-orphan',
  templateUrl: './more-info-orphan.component.html',
  styleUrls: ['./more-info-orphan.component.css']
})
export class MoreInfoOrphanComponent implements OnInit {

  constructor() { }
  @Input() orph:any;
  id:any;
  family_id:string;
  first_name:string;
  last_name:string;
  sex:string;
  birthdate:any;
  hobbies:string;
  education_status:string;
  health_status:string;
  Family:string;

  ngOnInit(): void {
    this.id = this.orph.id;
    this.family_id = this.orph.family_id;
    this.first_name = this.orph.first_name;
    this.last_name = this.orph.last_name;
    this.sex = this.orph.sex;
    this.birthdate = this.orph.birthdate;
    this.hobbies = this.orph.hobbies;
    this.education_status = this.orph.education_status;
    this.health_status = this.orph.health_status;
  }

}
