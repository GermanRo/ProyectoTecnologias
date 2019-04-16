import { ActivatedRoute, Params } from '@angular/router';
import { InfoInterface } from './../../models/Info';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public inf: InfoInterface = {};

  ngOnInit() {
    const idInfo = this.route.snapshot.params['id'];
    this.getDetails(idInfo);
  }

  getDetails(idInfo: string): void {
    this.dataApi.getOneinfo(idInfo).subscribe(inf => {
      this.inf = inf;
    });
  }

}
