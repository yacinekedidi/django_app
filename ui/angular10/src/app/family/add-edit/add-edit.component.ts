import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() fam: any;
  id: any;
  cin: string;
  first_name: string;
  last_name: string;
  sex: string;
  birthdate: any;
  address: string;
  phone: string;
  health_insurance: string;
  job: string;
  income: any;
  home_status: string;
  home_owner: string;
  health_status: string;
  deceased_parent_name: string;
  cause_of_death: string;
  sponsor_name: string;
  family_status: string;

  ngOnInit(): void {}

  addFamily() {
    var val = {
      id: this.id,
      cin: this.cin,
      first_name: this.first_name,
      last_name: this.last_name,
      sex: this.sex,
      birthdate: this.birthdate,
      address: this.address,
      phone: this.phone,
      health_insurance: this.health_insurance,
      job: this.job,
      income: this.income,
      home_status: this.home_status,
      home_owner: this.home_owner,
      health_status: this.health_status,
      deceased_parent_name: this.deceased_parent_name,
      cause_of_death: this.cause_of_death,
      sponsor_name: this.sponsor_name,
      family_status: this.family_status,
    };
    this.service.addFamily(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateFamily() {
    var val = {
      id: this.id,
      cin: this.cin,
      first_name: this.first_name,
      last_name: this.last_name,
      sex: this.sex,
      birthdate: this.birthdate,
      address: this.address,
      phone: this.phone,
      health_insurance: this.health_insurance,
      job: this.job,
      income: this.income,
      home_status: this.home_status,
      home_owner: this.home_owner,
      health_status: this.health_status,
      deceased_parent_name: this.deceased_parent_name,
      cause_of_death: this.cause_of_death,
      sponsor_name: this.sponsor_name,
      family_status: this.family_status,
    };
    this.service.updateFamily(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
