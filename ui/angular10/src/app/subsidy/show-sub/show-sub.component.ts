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
  sub:any;


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
  }

  editClick(item){
    this.sub=item;
    this.ModalTitle="Edit Subsidy";
    this.ActivateAddEditSubComp=true;

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
      
    });
  }

}
