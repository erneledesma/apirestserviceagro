import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // Crea un nuevo PolygonW
  public createPolygonoCloud (data: { dt: string, humidity: string, pressure: string, temp: string }) {
    return this.firestore.collection('polygonCloud').add(data);
  }
  // Obtiene un Polygon
  public getPolygonoCloud(dt: string, humidity: string, pressure: string, temp: string) {
    return this.firestore.collection('polygonCloud').doc(dt).snapshotChanges(),
           this.firestore.collection('polygonCloud').doc(humidity).snapshotChanges(),
           this.firestore.collection('polygonCloud').doc(pressure).snapshotChanges(),
           this.firestore.collection('polygonCloud').doc(temp).snapshotChanges();

  }
  // // Obtiene todos los Polygonos
  // public getPolygonos() {
  //   return this.firestore.collection('polygonCloud').snapshotChanges();
  // }
  // Actualiza un Polygono
  public updatePolygonoCloud(documentId: string, data: any) {
    return this.firestore.collection('polygonCloud').doc(documentId).set(data);
  }
}

