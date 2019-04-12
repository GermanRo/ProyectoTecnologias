import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
public info=[];
public inf='';

  ngOnInit() {
    this.dataApi.getInfo().subscribe(info=>{
      console.log('INFO',info);
    })
  }

}
