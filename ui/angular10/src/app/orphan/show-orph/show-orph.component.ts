import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-orph',
  templateUrl: './show-orph.component.html',
  styleUrls: ['./show-orph.component.css']
})
export class ShowOrphComponent implements OnInit {

  OrphanList:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshOrphList();
  }



  refreshOrphList(){
    this.service.getOrphList().subscribe(data=>{
      this.OrphanList=data;
      
    });
  }

}
