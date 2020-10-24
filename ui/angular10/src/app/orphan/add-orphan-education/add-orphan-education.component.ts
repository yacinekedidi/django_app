import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-orphan-education',
  templateUrl: './add-orphan-education.component.html',
  styleUrls: ['./add-orphan-education.component.css'],
})
export class AddOrphanEducationComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() orph: any;
  id: any;
  show: boolean = true;
  orphan_id: any;
  school: string;
  grade_year: string;
  success: boolean;
  score_1: string;
  score_2: string;
  score_3: string;
  score_final: string;

  OrphanList: any = [];

  ngOnInit(): void {
    this.loadOrphanlist();
  }

  loadOrphanlist() {
    this.service.getOrphById(this.orph.id).subscribe((data) => {
      this.OrphanList = data;
    });
  }

  addOrphanEducation() {
    var val = {
      id: this.id,
      orphan_id: this.orph.id,
      show: this.show,
      school: this.school,
      grade_year: this.grade_year,
      success: this.success,
      score_1: this.score_1,
      score_2: this.score_2,
      score_3: this.score_3,
      score_final: this.score_final,
    };
    this.service.addOrphEducation(val).subscribe((data) => {
      alert(data.toString());
    });
  }

  checked() {
    this.success = true;
  }
  checkedshow() {
    this.show = false;
  }
}
