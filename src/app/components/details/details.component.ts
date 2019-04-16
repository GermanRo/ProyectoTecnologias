import { InfoInterface } from './../../models/Info';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public inf: InfoInterface;

  ngOnInit() {
    const idInfo = 'DNzuXpNhk8nteJYebKWu';
    this.dataApi.getOneinfo(idInfo).subscribe(inf => {
      console.log(inf);
    });
  }

}
