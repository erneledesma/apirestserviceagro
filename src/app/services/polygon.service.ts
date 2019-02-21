import { Injectable } from '@angular/core';

// tslint:disable-next-line:quotemark
import { PolygonW } from "../interfaces/polygon.interface";

import { Http, Headers } from '@angular/http';

// import 'rxjs/Rx';
import { Observable } from 'rxjs';

// Firebase Database
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})


// function writeUserData(dt, clouds, humidity, pressure,temp,wind,speed,deg) {
//   firebase.database().ref('polygon/' + dt + clouds + humidity + pressure + temp + wind + speed + deg ).set({
//     dt: "",
//     clouds: "",
//     humidity:"",
//     pressure:"",
//     temp: "",
//     wind: "",
//     speed: "",
//     deg: "",
//   });
// }

export class PolygonService {

  API_ENDPOINT = 'https://apipolygonubajay.firebaseio.com/polygon.json';

  constructor( private http: Http ) { }

  nuevoPolygon( polygon: PolygonW ) {
    const body = JSON.stringify(polygon);
    const headers = new Headers({
      'Content-Type': 'application/json'

    });
    return this.http.post(this.API_ENDPOINT, body, { headers } )
        .map( res => {
          console.log(res.json());
          return res.json();
        });
  }
}
