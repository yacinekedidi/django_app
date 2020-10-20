import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sub',
  templateUrl: './show-sub.component.html',
  styleUrls: ['./show-sub.component.css']
})

export class ShowSubComponent implements OnInit {

  SubsidyList:any=[]
  ModalTitle:string;
  ActivateAddEditSubComp:boolean=false;
  ActivateInfoSubComp:boolean=false;
  sub:any;

  IdFilter:string="";
  SubTypeFilter:string="";
  TitleFilter:string="";
  DescriptionFilter:string="";
  PriceUnitFilter:string="";
  GenderFilter:string="";
  AgeMinFilter:string="";
  AgeMaxFilter:string="";
  StatusFilter:string="";
  AmountFilter:string="";
  UnitFilter:string="";

  SubsidyListWithoutFilter:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshSubList();
  }


  addClick(){
    this.sub={
      id:0,
      sub_type:"",
      title:"",
      description:"",
      price_unit:"",
      gender:"",
      age_min:"",
      age_max:"",
      status:"",
      amount:"",
      unit:""
    }

    this.ModalTitle="Add Subsidy";
    this.ActivateAddEditSubComp=true;
    this.ActivateInfoSubComp=false;
  }

  editClick(item){
    this.sub=item;
    this.ModalTitle="Edit Subsidy";
    this.ActivateAddEditSubComp=true;
    this.ActivateInfoSubComp=false;
  }

  infoClick(item){
    this.sub=item;
    this.ModalTitle="Subsidy Information";
    this.ActivateInfoSubComp=true;
  }

  deleteClick(item){
    if (confirm("are you sure you want to delete this??")){
      this.service.deleteSubsidy(item.id).subscribe(data=>{
        alert("deleted successfully!!");
        this.refreshSubList();
      })
    }
    this.sub=item;
    this.ActivateAddEditSubComp=true;

  }


  closeClick(){
    this.ActivateAddEditSubComp=false;
    this.refreshSubList();

  }



  refreshSubList(){
    this.service.getSubList().subscribe(data=>{
      this.SubsidyList=data;

      this.SubsidyListWithoutFilter=data;
      
    });
  }


  FilterFunction(){
    var IdFilter = this.IdFilter;
    var SubTypeFilter = this.SubTypeFilter;
    var TitleFilter = this.TitleFilter;
    var DescriptionFilter = this.DescriptionFilter;
    var PriceUnitFilter = this.PriceUnitFilter;
    var GenderFilter = this.GenderFilter;
    var AgeMinFilter = this.AgeMinFilter;
    var AgeMaxFilter = this.AgeMaxFilter;
    var StatusFilter = this.StatusFilter;
    var AmountFilter= this.AmountFilter;
    var UnitFilter = this.UnitFilter;


    this.SubsidyList = this.SubsidyListWithoutFilter.filter(function(el){
      return el.id.toString().toLowerCase().startsWith(
        IdFilter.toString().trim().toLowerCase()
      ) &&
      el.sub_type.toString().toLowerCase().startsWith(
        SubTypeFilter.toString().trim().toLowerCase()
      ) &&
      el.title.toString().toLowerCase().startsWith(
        TitleFilter.toString().trim().toLowerCase()
      ) &&
      el.description.toString().toLowerCase().includes(
        DescriptionFilter.toString().trim().toLowerCase()
      ) &&
      el.price_unit.toString().toLowerCase().startsWith(
        PriceUnitFilter.toString().trim().toLowerCase()
      ) &&
      el.gender.toString().includes(
        GenderFilter.toString().trim().toLowerCase()
      ) &&
      el.age_min.toString().toLowerCase().startsWith(
        AgeMinFilter.toString().trim().toLowerCase()
      ) &&
      el.age_max.toString().toLowerCase().startsWith(
        AgeMaxFilter.toString().trim().toLowerCase()
      ) &&
      el.status.toString().toLowerCase().startsWith(
        StatusFilter.toString().trim().toLowerCase()
      ) &&
      el.amount.toString().toLowerCase().startsWith(
        AmountFilter.toString().trim().toLowerCase()
      ) &&
      el.unit.toString().toLowerCase().startsWith(
        UnitFilter.toString().trim().toLowerCase()
      ) 
    })

  }

}
