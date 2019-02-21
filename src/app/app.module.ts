import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

//servicios
import { PolygonService } from "./services/polygon.service";
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/search/navbar/navbar.component';
import { PolygonComponent } from './components/polygon/polygon.component';

// import route
import { ROUTES } from './app.routes';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PolygonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebase'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    PolygonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
