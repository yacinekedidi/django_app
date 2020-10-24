import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-orph',
  templateUrl: './add-edit-orph.component.html',
  styleUrls: ['./add-edit-orph.component.css'],
})
export class AddEditOrphComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() orph: any;
  id: any;
  family_id: string;
  first_name: string;
  last_name: string;
  sex: string;
  birthdate: any;
  hobbies: string;
  education_status: string;
  health_status: string;
  Family: string;

  FamiliesList: any = [];

  ngOnInit(): void {
    this.loadFamiliesList();
  }

  loadFamiliesList() {
    this.service.getAllFamilyNames().subscribe((data: any) => {
      this.FamiliesList = data;
      this.id = this.orph.id;
      this.family_id = this.orph.family_id;
      this.first_name = this.orph.first_name;
      this.last_name = this.orph.last_name;
      this.sex = this.orph.sex;
      this.birthdate = this.orph.birthdate;
      this.hobbies = this.orph.hobbies;
      this.education_status = this.orph.education_status;
      this.health_status = this.orph.health_status;
    });
  }

  addOrphan() {
    var val = {
      id: this.id,
      family_id: this.family_id,
      first_name: this.first_name,
      last_name: this.last_name,
      sex: this.sex,
      birthdate: this.birthdate,
      hobbies: this.hobbies,
      education_status: this.education_status,
      health_status: this.health_status,
    };
    this.service.addOrphan(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateOrphan() {
    var val = {
      id: this.id,
      family_id: this.family_id,
      first_name: this.first_name,
      last_name: this.last_name,
      sex: this.sex,
      birthdate: this.birthdate,
      hobbies: this.hobbies,
      education_status: this.education_status,
      health_status: this.health_status,
    };
    this.service.updateOrphan(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
