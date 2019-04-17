import { InfoInterface } from './../../../models/Info';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private info: InfoInterface[];


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.dataApi.getInfo().subscribe(info => {
      this.info = info;
    });
  }

  onDeleteInfo(){
    console.log('Delete');
  }

  


}
