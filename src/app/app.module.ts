import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Utilisé pour ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ListeHotelComponent } from './liste-hotel/liste-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ExerciceComponent,
    ListeHotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
