import { element } from 'protractor';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-show-fam',
  templateUrl: './show-fam.component.html',
  styleUrls: ['./show-fam.component.css']
})
export class ShowFamComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'my_table' // the id of html/table element
  }

  constructor(private service:SharedService, private exportAsService: ExportAsService) { }


  FamilyList:any=[];
  ModalTitle:string;
  ActivateAddEditFamComp:boolean=false;
  ActivateInfoFamComp:boolean=false;
  fam:any;


  IdFilter:string="";
  CinFilter:string="";
  NameFilter:string="";
  SexFilter:string="";
  BirthdateFilter:string="";
  AddressFilter:string="";
  PhoneFilter:string="";
  HealthInsuranceFilter:string="";
  JobFilter:string="";
  IncomeFilter:string="";
  HomeStatusFilter:string="";
  HomeOwnerFilter:string="";
  HealthStatusFilter:string="";
  DeceasedParentNameFilter:string="";
  CauseOfDeathFilter:string="";
  SponsorNameFilter:string="";
  FamilyStatusFilter:string="";

  FamilyListWithoutFilter:any=[];



  ngOnInit(): void {
    this.refreshFamList();
  }


  addClick(){
    this.fam={
      id:0,
      cin:"",
      first_name:"",
      last_name:"",
      sex:"",
      birthdate:"",
      address:"",
      phone:"",
      health_insurance:"",
      job:"",
      income:0,
      home_status:"",
      home_owner:"",
      health_status:"",
      deceased_parent_name:"",
      cause_of_death:"",
      sponsor_name:"",
      family_status:""
    }

    this.ModalTitle="Add Family";
    this.ActivateAddEditFamComp=true;
    this.ActivateInfoFamComp=false;
  }

  editClick(item){
    this.fam=item;
    this.ModalTitle="Edit Family";
    this.ActivateAddEditFamComp=true;
    this.ActivateInfoFamComp=false;
   
  }
  infoClick(item){
    this.fam=item;
    this.ModalTitle="Family Information";
    this.ActivateInfoFamComp=true;
  }


  deleteClick(item){
    if (confirm("are you sure you want to delete this??")){
      this.service.deleteFamily(item.id).subscribe(data=>{
        alert("deleted successfully!!");
        this.refreshFamList();
      })
    }
    this.fam=item;
    this.ActivateAddEditFamComp=true;

  }

  closeClick(){
    this.ActivateAddEditFamComp=false;
    this.refreshFamList();

  }


  refreshFamList(){
    this.service.getFamList().subscribe(data=>{
      this.FamilyList=data;
      this.FamilyListWithoutFilter = data;
      
    });
  
  
  
  }

  FilterFunction(){
    var IdFilter = this.IdFilter;
    var CinFilter = this.CinFilter;
    var NameFilter= this.NameFilter;
    var SexFilter= this.SexFilter.toString();
    var BirthdateFilter= this.BirthdateFilter.toString();
    var AddressFilter= this.AddressFilter;
    var PhoneFilter= this.PhoneFilter;
    var HealthInsuranceFilter= this.HealthInsuranceFilter
    var JobFilter= this.JobFilter;
    var IncomeFilter= this.IncomeFilter.toString();
    var HomeStatusFilter= this.HomeStatusFilter;
    var HomeOwnerFilter= this.HomeOwnerFilter;
    var HealthStatusFilter= this.HealthStatusFilter;
    var DeceasedParentNameFilter= this.DeceasedParentNameFilter;
    var CauseOfDeathFilter= this.CauseOfDeathFilter;
    var SponsorNameFilter= this.SponsorNameFilter;
    var FamilyStatusFilter= this.FamilyStatusFilter;
  
    this.FamilyList = this.FamilyListWithoutFilter.filter(function(el){
      var Name = el.first_name.concat(el.last_name)
      return el.id.toString().toLowerCase().startsWith(
        IdFilter.toString().trim().toLowerCase()
      ) &&
      el.cin.toString().toLowerCase().startsWith(
        CinFilter.toString().trim().toLowerCase()
      ) &&
      Name.toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      ) &&
      el.sex.toString().toLowerCase().startsWith(
        SexFilter.toString().trim().toLowerCase()
      ) &&
      el.birthdate.toString().includes(
        BirthdateFilter.toString().trim().toLowerCase()
      ) &&
      el.address.toString().toLowerCase().includes(
        AddressFilter.toString().trim().toLowerCase()
      ) &&
      el.phone.toString().toLowerCase().startsWith(
        PhoneFilter.toString().trim().toLowerCase()
      ) &&
      el.health_insurance.toString().toLowerCase().includes(
        HealthInsuranceFilter.toString().trim().toLowerCase()
      ) &&
      el.job.toString().toLowerCase().startsWith(
        JobFilter.toString().trim().toLowerCase()
      ) &&
      el.income.toString().toLowerCase().startsWith(
        IncomeFilter.toString().trim().toLowerCase()
      ) &&
      el.home_status.toString().toLowerCase().startsWith(
        HomeStatusFilter.toString().trim().toLowerCase()
      ) &&
      el.home_owner.toString().toLowerCase().startsWith(
        HomeOwnerFilter.toString().trim().toLowerCase()
      ) &&
      el.health_status.toString().toLowerCase().startsWith(
        HealthStatusFilter.toString().trim().toLowerCase()
      ) &&
      el.deceased_parent_name.toString().toLowerCase().startsWith(
        DeceasedParentNameFilter.toString().trim().toLowerCase()
      ) &&
      el.cause_of_death.toString().toLowerCase().includes(
        CauseOfDeathFilter.toString().trim().toLowerCase()
      ) &&
      el.sponsor_name.toString().toLowerCase().startsWith(
        SponsorNameFilter.toString().trim().toLowerCase()
      ) &&
      el.family_status.toString().toLowerCase().startsWith(
        FamilyStatusFilter.toString().trim().toLowerCase()
      ) 
    });
  
  }


  sortResult(param:any, flag:boolean){
    this.FamilyList = this.FamilyListWithoutFilter.sort(function(x, y){
      if(flag)
      {
        return (x[param] > y[param])?1 : ((x[param] < y[param]) ?-1: 0);
      } else {
        return (y[param] > x[param])?1 : ((y[param] < x[param]) ?-1: 0);
      }


    })
  }



  download(){
    this.exportAsService.save(this.exportAsConfig, 'families_list').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
   
  }

}
