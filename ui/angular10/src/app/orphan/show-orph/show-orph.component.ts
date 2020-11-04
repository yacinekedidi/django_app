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
  ActivateEditOrphEducationComp: boolean = false;
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

  // this method gets triggered if the user clicks on add orphan button
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
    this.ActivateEditOrphEducationComp = false;
  }

  // this method gets triggered if the user clicks on edit button
  editClick(item) {
    this.orph = item;
    this.ModalTitle = 'Edit Orphan';
    this.ActivateAddEditOrphComp = true;
    this.ActivateInfoOrphComp = false;
    this.ActivateAddEditOrphEducationComp = false;
    this.ActivateEditOrphEducationComp = false;
  }

  // this method gets triggered if the user clicks on more info orphan button
  infoClick(item) {
    this.orph = item;
    this.ModalTitle = 'Orphan Information';
    this.ActivateInfoOrphComp = true;
    this.ActivateAddEditOrphEducationComp = false;
    this.ActivateEditOrphEducationComp = false;
  }

  // this method gets triggered if the user clicks on delete orphan button
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

  // this method gets triggered if the user exits a modal
  closeClick() {
    this.ActivateAddEditOrphComp = false;
    this.refreshOrphList();
  }

  // this method gets called on the ngoninit function which  always runs first what it actually does is it makes both th orphan list and the orphanlistfiltered the same
  refreshOrphList() {
    this.service.getOrphList().subscribe((data) => {
      this.OrphanList = data;

      this.OrphanListWithoutFilter = data;
    });
  }

  // this method gets triggered if the user clicks on add orphan education button
  addOrphanEducation() {
    this.orph = this.OrphanList;
    this.ModalTitle = 'Add Orphan Education';
    this.ActivateAddEditOrphEducationComp = true;
    this.ActivateEditOrphEducationComp = false;
    this.ActivateAddEditOrphComp = false;
    this.ActivateInfoOrphComp = false;
  }

  // this method gets triggered if the user clicks on edit orphan education button
  editOrphEducationClick(item) {
    this.orph = item;
    this.ModalTitle = 'Edit Orphan Education';
    this.ActivateEditOrphEducationComp = true;
    this.ActivateAddEditOrphEducationComp = false;
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

  // makes a filtered list and displays it depending on which input box row the user typed
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

  //either sorts in ascending or decsendant order the rows of the table
  sortResult(param: any, flag: boolean) {
    this.OrphanList = this.OrphanListWithoutFilter.sort(function (x, y) {
      if (flag) {
        return x[param] > y[param] ? 1 : x[param] < y[param] ? -1 : 0;
      } else {
        return y[param] > x[param] ? 1 : y[param] < x[param] ? -1 : 0;
      }
    });
  }

  // this method triggers when the user clicks on download
  download() {
    this.exportAsService
      .save(this.exportAsConfig, 'orphans_list')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  }
}
