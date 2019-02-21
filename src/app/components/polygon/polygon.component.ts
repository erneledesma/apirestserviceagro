import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PolygonW } from '../../interfaces/polygon.interface';
import { PolygonService } from '../../services/polygon.service';
import 'rxjs/RX';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styles: []
})
export class PolygonComponent implements OnInit {

  polygons: PolygonW = {
    dt: '',
    clouds: '',
    humidity: '',
    pressure: '',
    temp: '',
    wind: '',
    speed: '',
    deg: ''

  };

  constructor( ) {
      //this.getPoligono = this.getPoligono.bind(this);
  }

  ngOnInit() {
  }

  // guardar(){
  //   console.log(this.polygons);
  //
  //   this._polygonService.nuevoPolygon(this.polygons)
  //       .subscribe(data =>{
  //
  //       })
  // }



}
