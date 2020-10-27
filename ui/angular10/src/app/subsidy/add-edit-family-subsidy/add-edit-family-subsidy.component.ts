import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-family-subsidy',
  templateUrl: './add-edit-family-subsidy.component.html',
  styleUrls: ['./add-edit-family-subsidy.component.css'],
})
export class AddEditFamilySubsidyComponent implements OnInit {
  constructor(private service: SharedService) {}
  @Input() sub: any;
  id: any;
  subsidy_id: string;
  family_id: string;
  sub_amount: any;
  show: boolean;
  total_amount: any;

  FamilyList: any = [];
  SubsidyList: any = [];
  subsidiesForFamilies: any = [];

  ngOnInit(): void {
    if (this.sub.id != 0) {
      this.total_amount = this.sub.amount;
      for (let i of this.sub.subsidiesForFamilies) {
        this.subsidiesForFamilies.push(i.id.toString());
      }
      this.onModelChange();
    }
    this.loadFamilyList();
    this.loadSubsidyList();
  }

  onModelChange() {
    for (let j of this.sub.subsidiesForFamilies) {
      if (this.id == j.id) {
        this.subsidy_id = j.subsidy_id.toString();
        this.family_id = j.family_id.toString();
        this.sub_amount = j.sub_amount.toString();
        this.show = j.show.toString();
      }
    }
  }

  loadFamilyList() {
    this.service.getFamList().subscribe((data) => {
      this.FamilyList = data;
      //alert(data.toString());
    });
  }

  loadSubsidyList() {
    this.service.getSubList().subscribe((data) => {
      this.SubsidyList = data;
      //alert(data.toString());
    });
  }

  addFamSub() {
    var val = {
      subsidy_id: this.subsidy_id,
      family_id: this.family_id,
      sub_amount: this.sub_amount,
      show: this.show,
    };
    this.service.addFamSub(val).subscribe((data) => {
      alert(data.toString());
    });
  }

  updateFamSub() {
    var val = {
      id: this.id,
      subsidy_id: this.subsidy_id,
      family_id: this.family_id,
      sub_amount: this.sub_amount,
      show: this.show,
    };
    this.service.updateFamSub(val).subscribe((data) => {
      alert(data.toString());
    });

    // update subsidy amount
    /*
    var val2 = {
      id: this.sub.id,
      amount: Number(this.sub.amount) - Number(val.sub_amount),
    };
    this.service.updateSubsidy(val).subscribe((data)=> {
      alert(data.toString());
    });
    */
  }

  checkedshow() {
    this.show = false;
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1);
    }

    return value;
  }
}
