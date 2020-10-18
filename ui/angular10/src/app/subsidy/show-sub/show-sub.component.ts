import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sub',
  templateUrl: './show-sub.component.html',
  styleUrls: ['./show-sub.component.css']
})
export class ShowSubComponent implements OnInit {

  SubsidyList:any=[]

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshSubList();
  }



  refreshSubList(){
    this.service.getSubList().subscribe(data=>{
      this.SubsidyList=data;
      
    });
  }

}
