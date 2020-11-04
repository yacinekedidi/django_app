import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-sub',
  templateUrl: './info-sub.component.html',
  styleUrls: ['./info-sub.component.css']
})
export class InfoSubComponent implements OnInit {

  constructor() { }

  @Input() sub:any;
  id:any;
  sub_type:string;
  title:string;
  description:string;
  price_unit:any;
  gender:string;
  age_min:any;
  age_max:any;
  status:string;
  amount:any;
  unit:string;

  ngOnInit(): void {
    this.id = this.sub.id;
    this.sub_type = this.sub.sub_type;
    this.title = this.sub.title;
    this.description = this.sub.description;
    this.price_unit = this.sub.price_unit;
    this.gender = this.sub.gender;
    this.age_min = this.sub.age_min;
    this.age_max = this.sub.age_max;
    this.status = this.sub.status;
    this.amount = this.sub.amount;
    this.unit = this.sub.unit;
  }
}
