import { Component, OnInit } from '@angular/core';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { $ } from 'protractor';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-orph',
  templateUrl: './show-orph.component.html',
  styleUrls: ['./show-orph.component.css'],
})
export class ShowOrphComponent implements OnInit {
  exportAsConfig: ExportAsConfig = {
    type: 'xls', // the type you want to download
    elementIdOrContent: 'my_table', // the id of html/table element
  };

  OrphanList: any = [];
  ModalTitle: string;
  ActivateAddEditOrphComp: boolean = false;
  ActivateInfoOrphComp: boolean = false;
  ActivateAddEditOrphEducationComp: boolean = false;
  orph: any;

  IdFilter: string = '';
  FamilyIdFilter: string = '';
  NameFilter: string = '';
  SexFilter: string = '';
  BirthdateFilter: string = '';
  HobbiesFilter: string = '';
  EducationStatusFilter: string = '';
  HealthStatusFilter: string = '';

  OrphanListWithoutFilter: any = [];

  //FamilyList:any=[];

  constructor(
    private service: SharedService,
    private exportAsService: ExportAsService
  ) {}

  isShow = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit(): void {
    this.refreshOrphList();
  }

  addClick() {
    this.orph = {
      id: 0,
      family_id: '',
      first_name: '',
      last_name: '',
      sex: '',
      birthdate: '',
      hobbies: '',
      education_status: '',
      health_status: '',
    };

    this.ModalTitle = 'Add Orphan';
    this.ActivateAddEditOrphComp = true;
    this.ActivateInfoOrphComp = false;
    this.ActivateAddEditOrphEducationComp = false;
  }

  editClick(item) {
    this.orph = item;
    this.ModalTitle = 'Edit Orphan';
    this.ActivateAddEditOrphComp = true;
    this.ActivateInfoOrphComp = false;
    this.ActivateAddEditOrphEducationComp = false;
  }

  infoClick(item) {
    this.orph = item;
    this.ModalTitle = 'Orphan Information';
    this.ActivateInfoOrphComp = true;
    this.ActivateAddEditOrphEducationComp = false;
  }

  deleteClick(item) {
    if (confirm('are you sure you want to delete this??')) {
      this.service.deleteOrphan(item.id).subscribe((data) => {
        alert('deleted successfully!!');
        this.refreshOrphList();
      });
    }
    this.orph = item;
    this.ActivateAddEditOrphComp = true;
  }

  closeClick() {
    this.ActivateAddEditOrphComp = false;
    this.refreshOrphList();
  }

  refreshOrphList() {
    this.service.getOrphList().subscribe((data) => {
      this.OrphanList = data;

      this.OrphanListWithoutFilter = data;
    });
  }

  addOrphanEducation(item) {
    this.orph = item;
    this.ModalTitle = 'Add Orphan Education';
    this.ActivateAddEditOrphEducationComp = true;
    this.ActivateAddEditOrphComp = false;
    this.ActivateInfoOrphComp = false;
  }

  /*
  FamilyListFunc(item:any){
    this.service.getFamById(item.family_id).subscribe(data=>{
      this.FamilyList = data;
    });
  }
*/

  FilterFunction() {
    var IdFilter = this.IdFilter;
    var FamilyIdFilter = this.FamilyIdFilter;
    var NameFilter = this.NameFilter;
    var SexFilter = this.SexFilter;
    var BirthdateFilter = this.BirthdateFilter;
    var HobbiesFilter = this.HobbiesFilter;
    var EducationStatusFilter = this.EducationStatusFilter;
    var HealthStatusFilter = this.HealthStatusFilter;

    this.OrphanList = this.OrphanListWithoutFilter.filter(function (el) {
      var Name = el.first_name.concat(el.last_name);
      return (
        el.id
          .toString()
          .toLowerCase()
          .startsWith(IdFilter.toString().trim().toLowerCase()) &&
        el.family_id
          .toString()
          .toLowerCase()
          .startsWith(FamilyIdFilter.toString().trim().toLowerCase()) &&
        Name.toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        ) &&
        el.sex
          .toString()
          .toLowerCase()
          .startsWith(SexFilter.toString().trim().toLowerCase()) &&
        el.birthdate
          .toString()
          .includes(BirthdateFilter.toString().trim().toLowerCase()) &&
        el.hobbies
          .toString()
          .toLowerCase()
          .includes(HobbiesFilter.toString().trim().toLowerCase()) &&
        el.education_status
          .toString()
          .toLowerCase()
          .startsWith(EducationStatusFilter.toString().trim().toLowerCase()) &&
        el.health_status
          .toString()
          .toLowerCase()
          .startsWith(HealthStatusFilter.toString().trim().toLowerCase())
      );
    });
  }

  sortResult(param: any, flag: boolean) {
    this.OrphanList = this.OrphanListWithoutFilter.sort(function (x, y) {
      if (flag) {
        return x[param] > y[param] ? 1 : x[param] < y[param] ? -1 : 0;
      } else {
        return y[param] > x[param] ? 1 : y[param] < x[param] ? -1 : 0;
      }
    });
  }

  download() {
    this.exportAsService
      .save(this.exportAsConfig, 'orphans_list')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  }
}
