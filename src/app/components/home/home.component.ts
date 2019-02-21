import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FirestoreService } from '../../services/firestore/firestore.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  polygons: any;
  polygonUv: any;
  polygonSoil: any;
  polygonCloud: any;

  constructor( private http: HttpClient ) {
    console.log('Constructor del Home');
    this.http.get('http://api.agromonitoring.com/agro/1.0/weather?polyid=5c07b91816d5840008648b4e&appid=438bb6e763a1efc0d729770ca5186754')
      .subscribe((resp: any) => {
        this.polygons = resp;
        console.log(resp);
      });

      this.http.get('http://api.agromonitoring.com/agro/1.0/uvi?polyid=5c07b91816d5840008648b4e&appid=438bb6e763a1efc0d729770ca5186754')
        .subscribe((resp: any) => {
          this.polygonUv = resp;
          console.log(resp);
        });

        this.http.get('http://api.agromonitoring.com/agro/1.0/soil?polyid=5c07b91816d5840008648b4e&appid=438bb6e763a1efc0d729770ca5186754')
          .subscribe((resp: any) => {
            this.polygonSoil = resp;
            console.log(resp);
          });
   }

  ngOnInit() {

    // this.firestoreService.getPolygonoCloud().subscribe((polygonoSnapshot) => {
    //   // this.polygonCloud = [];
    //   polygonoSnapshot.forEach((polygonoData: any) => {
    //     this.polygonCloud.push({
    //       id: polygonoData.payload.doc.id,
    //       data: polygonoData.payload.doc.data()
    //     });
    //   });
    // });
  }



}
