import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  lat: number = 4.64213514467333;
  lng: number = -74.10309157334268;
  lat2: number = 4.704724091371759;
  lng2: number = -74.0320276417249;
  lat3: number = 4.669488252643546;
  lng3: number = -74.05205447687942;
  lat4: number = 4.676733537817952;
  lng4: number = -74.04833258329707;
  lat5: number = 4.682912744592215;
  lng5: number = -74.05508461718252;
  lat6: number = 4.70225493174037;
  lng6: number = -74.04163920127216;
  lat7: number = 4.711432872653603;
  lng7: number = -74.07147510556055;
  lat8: number = 4.689325288678802;
  lng8: number = -74.06863955959221;
  lat9: number = 4.685492620408141;
  lng9: number = -74.07635222796063;
  zoom: number = 12;


  constructor() {

  }

  ngOnInit()
    {
    }
}
