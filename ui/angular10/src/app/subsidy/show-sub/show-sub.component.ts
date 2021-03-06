import { Component, OnInit } from '@angular/core';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sub',
  templateUrl: './show-sub.component.html',
  styleUrls: ['./show-sub.component.css'],
})
export class ShowSubComponent implements OnInit {
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'my_table', // the id of html/table element
  };

  isShow = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  SubsidyList: any = [];
  ModalTitle: string;
  ActivateAddEditSubComp: boolean = false;
  ActivateInfoSubComp: boolean = false;
  ActivateAddEditFamSubComp: boolean = false;
  sub: any;

  IdFilter: string = '';
  SubTypeFilter: string = '';
  TitleFilter: string = '';
  DescriptionFilter: string = '';
  PriceUnitFilter: string = '';
  GenderFilter: string = '';
  AgeMinFilter: string = '';
  AgeMaxFilter: string = '';
  StatusFilter: string = '';
  AmountFilter: string = '';
  UnitFilter: string = '';

  SubsidyListWithoutFilter: any = [];

  constructor(
    private service: SharedService,
    private exportAsService: ExportAsService
  ) {}

  ngOnInit(): void {
    this.refreshSubList();
  }

  addClick() {
    this.sub = {
      id: 0,
      sub_type: '',
      title: '',
      description: '',
      price_unit: '',
      gender: '',
      age_min: '',
      age_max: '',
      status: '',
      amount: '',
      unit: '',
    };

    this.ModalTitle = 'Add Subsidy';
    this.ActivateAddEditSubComp = true;
    this.ActivateInfoSubComp = false;
    this.ActivateAddEditFamSubComp = false;
  }

  editClick(item) {
    this.sub = item;
    this.ModalTitle = 'Edit Subsidy';
    this.ActivateAddEditSubComp = true;
    this.ActivateInfoSubComp = false;
    this.ActivateAddEditFamSubComp = false;
  }

  infoClick(item) {
    this.sub = item;
    this.ModalTitle = 'Subsidy Information';
    this.ActivateInfoSubComp = true;
    this.ActivateAddEditFamSubComp = false;
  }

  deleteClick(item) {
    if (confirm('are you sure you want to delete this??')) {
      this.service.deleteSubsidy(item.id).subscribe((data) => {
        alert('deleted successfully!!');
        this.refreshSubList();
      });
    }
    this.sub = item;
    this.ActivateAddEditSubComp = true;
  }

  closeClick() {
    this.ActivateAddEditSubComp = false;
    this.refreshSubList();
  }

  addFamilySubClick() {
    this.sub = {
      id: 0,
      sub_type: '',
      title: '',
      description: '',
      price_unit: '',
      gender: '',
      age_min: '',
      age_max: '',
      status: '',
      amount: '',
      unit: '',
    };
    this.ModalTitle = 'Add Family Subsidy';
    this.ActivateAddEditFamSubComp = true;
    this.ActivateAddEditSubComp = false;
    this.ActivateInfoSubComp = false;
  }

  editFamSubClick(item) {
    this.sub = item;
    this.ModalTitle = 'Edit Family Subsidy';
    this.ActivateAddEditFamSubComp = true;
    this.ActivateAddEditSubComp = false;
    this.ActivateInfoSubComp = false;
  }

  refreshSubList() {
    this.service.getSubList().subscribe((data) => {
      this.SubsidyList = data;

      this.SubsidyListWithoutFilter = data;
    });
  }

  FilterFunction() {
    var IdFilter = this.IdFilter;
    var SubTypeFilter = this.SubTypeFilter;
    var TitleFilter = this.TitleFilter;
    var DescriptionFilter = this.DescriptionFilter;
    var PriceUnitFilter = this.PriceUnitFilter;
    var GenderFilter = this.GenderFilter;
    var AgeMinFilter = this.AgeMinFilter;
    var AgeMaxFilter = this.AgeMaxFilter;
    var StatusFilter = this.StatusFilter;
    var AmountFilter = this.AmountFilter;
    var UnitFilter = this.UnitFilter;

    this.SubsidyList = this.SubsidyListWithoutFilter.filter(function (el) {
      return (
        el.id
          .toString()
          .toLowerCase()
          .startsWith(IdFilter.toString().trim().toLowerCase()) &&
        el.sub_type
          .toString()
          .toLowerCase()
          .startsWith(SubTypeFilter.toString().trim().toLowerCase()) &&
        el.title
          .toString()
          .toLowerCase()
          .startsWith(TitleFilter.toString().trim().toLowerCase()) &&
        el.description
          .toString()
          .toLowerCase()
          .includes(DescriptionFilter.toString().trim().toLowerCase()) &&
        el.price_unit
          .toString()
          .toLowerCase()
          .startsWith(PriceUnitFilter.toString().trim().toLowerCase()) &&
        el.gender
          .toString()
          .includes(GenderFilter.toString().trim().toLowerCase()) &&
        el.age_min
          .toString()
          .toLowerCase()
          .startsWith(AgeMinFilter.toString().trim().toLowerCase()) &&
        el.age_max
          .toString()
          .toLowerCase()
          .startsWith(AgeMaxFilter.toString().trim().toLowerCase()) &&
        el.status
          .toString()
          .toLowerCase()
          .startsWith(StatusFilter.toString().trim().toLowerCase()) &&
        el.amount
          .toString()
          .toLowerCase()
          .startsWith(AmountFilter.toString().trim().toLowerCase()) &&
        el.unit
          .toString()
          .toLowerCase()
          .startsWith(UnitFilter.toString().trim().toLowerCase())
      );
    });
  }

  sortResult(param: any, flag: boolean) {
    this.SubsidyList = this.SubsidyListWithoutFilter.sort(function (x, y) {
      if (flag) {
        return x[param] > y[param] ? 1 : x[param] < y[param] ? -1 : 0;
      } else {
        return y[param] > x[param] ? 1 : y[param] < x[param] ? -1 : 0;
      }
    });
  }

  download() {
    this.exportAsService
      .save(this.exportAsConfig, 'subsidies_list')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  }
}
