import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NgxDataTableModule} from "angular-9-datatable";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    RegistroComponent,
    GaleriaComponent,
    Punto4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
