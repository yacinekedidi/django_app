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

  ngOnInit(): void {
    this.refreshFamList();
  }



  refreshFamList(){
    this.service.getFamList().subscribe(data=>{
      this.FamilyList=data;
      
    });
  }

}
