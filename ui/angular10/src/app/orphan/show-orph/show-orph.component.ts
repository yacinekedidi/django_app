import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-orph',
  templateUrl: './show-orph.component.html',
  styleUrls: ['./show-orph.component.css']
})
export class ShowOrphComponent implements OnInit {

  OrphanList:any=[];
  ModalTitle:string;
  ActivateAddEditOrphComp:boolean=false;
  orph:any;

  IdFilter:string="";
  FamilyIdFilter:string="";
  FirstNameFilter:string="";
  LastNameFilter:string="";
  SexFilter:string="";
  BirthdateFilter:string="";
  HobbiesFilter:string="";
  EducationStatusFilter:string="";
  HealthStatusFilter:string="";

  OrphanListWithoutFilter:any=[];


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshOrphList();
  }

  addClick(){
    this.orph={
      id:0,
      family_id:"",
      first_name:"",
      last_name:"",
      sex:"",
      birthdate:"",
      hobbies:"",
      education_status:"",
      health_status:""
    }

    this.ModalTitle="Add Orphan";
    this.ActivateAddEditOrphComp=true;
  }

  editClick(item){
    this.orph=item;
    this.ModalTitle="Edit Orphan";
    this.ActivateAddEditOrphComp=true;

  }

  deleteClick(item){
    if (confirm("are you sure you want to delete this??")){
      this.service.deleteOrphan(item.id).subscribe(data=>{
        alert("deleted successfully!!");
        this.refreshOrphList();
      })
    }
    this.orph=item;
    this.ActivateAddEditOrphComp=true;

  }


  closeClick(){
    this.ActivateAddEditOrphComp=false;
    this.refreshOrphList();

  }


  refreshOrphList(){
    this.service.getOrphList().subscribe(data=>{
      this.OrphanList=data;
      
      this.OrphanListWithoutFilter = data;
      
    });
  }


  FilterFunction(){
    var IdFilter = this.IdFilter;
    var FamilyIdFilter = this.FamilyIdFilter;
    var FirstNameFilter = this.FirstNameFilter;
    var LastNameFilter = this.LastNameFilter;
    var SexFilter = this.SexFilter;
    var BirthdateFilter = this.BirthdateFilter;
    var HobbiesFilter = this.HobbiesFilter;
    var EducationStatusFilter = this.EducationStatusFilter;
    var HealthStatusFilter = this.HealthStatusFilter;

    this.OrphanList = this.OrphanListWithoutFilter.filter(function(el){

      return el.id.toString().toLowerCase().startsWith(
        IdFilter.toString().trim().toLowerCase()
      ) &&
      el.family_id.toString().toLowerCase().startsWith(
        FamilyIdFilter.toString().trim().toLowerCase()
      ) &&
      el.first_name.toString().toLowerCase().startsWith(
        FirstNameFilter.toString().trim().toLowerCase()
      ) &&
      el.last_name.toString().toLowerCase().startsWith(
        LastNameFilter.toString().trim().toLowerCase()
      ) &&
      el.sex.toString().toLowerCase().startsWith(
        SexFilter.toString().trim().toLowerCase()
      ) &&
      el.birthdate.toString().includes(
        BirthdateFilter.toString().trim().toLowerCase()
      ) &&
      el.hobbies.toString().toLowerCase().includes(
        HobbiesFilter.toString().trim().toLowerCase()
      ) &&
      el.education_status.toString().toLowerCase().startsWith(
        EducationStatusFilter.toString().trim().toLowerCase()
      ) &&
      el.health_status.toString().toLowerCase().startsWith(
        HealthStatusFilter.toString().trim().toLowerCase()
      ) 
    });
  }

  sortResult(param:any,flag:boolean){
    this.OrphanList = this.OrphanListWithoutFilter.sort(function(x, y){
      if(flag)
      {
        return (x[param] > y[param])?1 : ((x[param] < y[param]) ?-1: 0);
      } else {
        return (y[param] > x[param])?1 : ((y[param] < x[param]) ?-1: 0);
      }


    })
  }


}
