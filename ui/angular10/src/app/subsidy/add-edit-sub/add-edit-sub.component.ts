import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sub',
  templateUrl: './add-edit-sub.component.html',
  styleUrls: ['./add-edit-sub.component.css'],
})
export class AddEditSubComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() sub: any;
  id: any;
  sub_type: string;
  title: string;
  description: string;
  price_unit: any;
  gender: string;
  age_min: any;
  age_max: any;
  status: string;
  amount: any;
  unit: string;

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

  addSubsidy() {
    var val = {
      id: this.id,
      sub_type: this.sub_type,
      title: this.title,
      description: this.description,
      price_unit: this.price_unit,
      gender: this.gender,
      age_min: this.age_min,
      age_max: this.age_max,
      status: this.status,
      amount: this.amount,
      unit: this.unit,
    };
    this.service.addSubsidy(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateSubsidy() {
    var val = {
      id: this.id,
      sub_type: this.sub_type,
      title: this.title,
      description: this.description,
      price_unit: this.price_unit,
      gender: this.gender,
      age_min: this.age_min,
      age_max: this.age_max,
      status: this.status,
      amount: this.amount,
      unit: this.unit,
    };
    this.service.updateSubsidy(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
