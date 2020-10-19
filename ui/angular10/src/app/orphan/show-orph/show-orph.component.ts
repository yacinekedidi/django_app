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
      
    });
  }

}
