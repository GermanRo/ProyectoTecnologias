import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public info = [];
  public inf = '';

 
  ngOnInit() {
    this.dataApi.getInfo().subscribe(info => {
      console.log('INFO', info);
      this.info = info;
    })
  }
}
