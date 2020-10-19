import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-fam',
  templateUrl: './show-fam.component.html',
  styleUrls: ['./show-fam.component.css']
})
export class ShowFamComponent implements OnInit {

  constructor(private service:SharedService) { }

  FamilyList:any=[];
  ModalTitle:string;
  ActivateAddEditFamComp:boolean=false;
  fam:any;

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
  }

  editClick(item){
    this.fam=item;
    this.ModalTitle="Edit Family";
    this.ActivateAddEditFamComp=true;

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
      
    });
  }

}
