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
  sub_amount: number;
  show: boolean;

  old_sub_amount: any;
  total_amount: any;

  FamilyList: any = [];
  SubsidyList: any = [];
  subsidiesForFamilies: any = [];
  y: any;

  ngOnInit(): void {
    //alert(this.total_amount);

    if (this.sub.id != 0) {
      this.total_amount = this.sub.amount;
      for (let i of this.sub.subsidiesForFamilies) {
        this.subsidiesForFamilies.push(i.id.toString());
      }
      this.onModelChange();
    } else {
      this.onModelChangeForAdd();
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
        this.old_sub_amount = j.sub_amount;
        this.show = j.show.toString();
        this.total_amount =
          Number(this.total_amount) + Number(this.old_sub_amount);
      }
    }
  }

  onModelChangeForAdd() {
    this.service.getSubById(this.subsidy_id).subscribe((data) => {
      //alert(data.toString());
      var i = 0;
      while (data[i].id != this.subsidy_id) {
        i++;
      }
      if (data[i].id == this.subsidy_id) {
        this.total_amount = data[i].amount;
      }
    });
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

  //need to create onchange => gives the max_amount (amount)
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

    var val2 = {
      id: this.subsidy_id,
      amount: this.total_amount - this.sub_amount,
    };

    this.service.updateSubsidy(val2).subscribe((data) => {
      alert(data.toString());
    });
  }

  updateFamSub() {
    //alert('old_sub_amount' + this.old_sub_amount); 65
    //alert('new_sub_amount' + this.sub_amount); 85
    //alert('total amount' + this.total_amount); 111
    this.y =
      Number(this.total_amount) + Number(this.total_amount - this.sub_amount);
    //alert(this.total_amount);
    //alert(this.sub_amount);
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
    var val2 = {
      id: this.sub.id,
      amount: this.y,
      title: this.sub.title,
      description: this.sub.description,
      sub_type: this.sub.sub_type,
    };

    this.service.updateSubsidy(val2).subscribe(
      (data) => {
        alert(data.toString());
      },
      (err) => {
        alert(err.toString());
      }
    );
  }

  checkedshow() {
    this.show = true;
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1);
    }

    return value;
  }
}
