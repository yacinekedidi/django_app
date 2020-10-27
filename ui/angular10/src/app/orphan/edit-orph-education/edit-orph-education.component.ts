import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-orph-education',
  templateUrl: './edit-orph-education.component.html',
  styleUrls: ['./edit-orph-education.component.css'],
})
export class EditOrphEducationComponent implements OnInit {
  constructor(private service: SharedService) {}
  @Input() orph: any;
  id: any;
  show: boolean = true;
  orphan_id: any; // when we select this need a request that returns the orphan education info by this ID
  school: string;
  grade_year: string;
  success: boolean;
  score_1: string;
  score_2: string;
  score_3: string;
  score_final: string;
  //academic_year: any = new Date().getFullYear();
  academic_year: any;
  edus: any = [];

  ngOnInit(): void {
    this.onModelChange();
    //alert(this.orph.orphan_education[0].id);
    //alert(this.orph.orphan_education[0].academic_year);
    //alert(this.edus[0]);
    //alert(this.orph.orphan_education.length);
    //alert(typeof this.orph.orphan_education[0].id);
  }

  onModelChange() {
    //this.edus = this.orph.orphan_education;
    for (let j of this.orph.orphan_education) {
      this.edus.push(j.academic_year.toString());
    }
    for (let i of this.orph.orphan_education) {
      if (this.academic_year == i.academic_year.toString()) {
        this.id = i.id.toString();
        this.orphan_id = i.orphan_id.toString();
        this.show = i.show.toString();
        this.school = i.school.toString();
        this.success = i.success.toString();
        this.score_1 = i.score_1.toString();
        this.score_2 = i.score_2.toString();
        this.score_3 = i.score_3.toString();
        this.score_final = i.score_final.toString();
        this.grade_year = i.grade_year;
      }
    }
  }

  updateOrphanEducation() {
    var val = {
      id: this.id,
      show: this.show,
      orphan_id: this.orphan_id,
      school: this.school,
      grade_year: this.grade_year,
      success: this.success,
      score_1: this.score_1,
      score_2: this.score_2,
      score_3: this.score_3,
      score_final: (
        (Number(this.score_1) + Number(this.score_2) + Number(this.score_3)) /
        3
      ).toString(),
      academic_year: this.academic_year,
    };
    this.service.updateOrphEducation(val).subscribe((data) => {
      alert(data.toString());
    });
  }

  checkedshow() {
    this.show = false;
  }
}
