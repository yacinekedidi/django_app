import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-orphan-education',
  templateUrl: './add-orphan-education.component.html',
  styleUrls: ['./add-orphan-education.component.css'],
})
export class AddOrphanEducationComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() orph: any; //every orphan
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
  OrphanList: any = [];

  ngOnInit(): void {
    this.loadOrphanlist();
  }

  loadOrphanlist() {
    this.service.getOrphById(this.orphan_id).subscribe((data) => {
      this.OrphanList = data;
    });
  }

  // triggers when we add an orphan education
  addOrphanEducation() {
    var listgradeyears = [
      'PRE',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      'UNI',
      'GR',
    ];
    var f: any;
    if (this.score_1 && this.score_2 && this.score_3) {
      f = false;
      if (
        (Number(this.score_1) + Number(this.score_2) + Number(this.score_3)) /
          3 >=
        10
      ) {
        f = true;
      }
    }

    var val = {
      id: this.id,
      orphan_id: this.orphan_id,
      show: this.show,
      school: this.school,
      grade_year: this.grade_year,
      success: f,
      score_1: this.score_1,
      score_2: this.score_2,
      score_3: this.score_3,
      score_final: (
        (Number(this.score_1) + Number(this.score_2) + Number(this.score_3)) /
        3
      ).toString(),
      academic_year: this.academic_year,
    };
    //alert(listgradeyears.indexOf(val.grade_year));
    //alert(listgradeyears.length);
    //alert(val.grade_year);
    /*
    if (typeof f === 'boolean' && f == true) {
      if (listgradeyears.indexOf(val.grade_year) + 1 == listgradeyears.length) {
        delete val.grade_year;
      } else {
        val.grade_year =
          listgradeyears[listgradeyears.indexOf(val.grade_year) + 1];
      }
    }
    */
    this.service.addOrphEducation(val).subscribe(
      (data) => {
        alert(data.toString());
      },
      (error) => {
        alert(error);
      }
    );
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
