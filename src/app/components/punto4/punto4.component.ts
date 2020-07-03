import { Component, OnInit } from '@angular/core';
import { Figura } from 'src/app/models/figura';
import { CrucigramaService } from 'src/app/services/crucigrama.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  figura: Figura;
  crucigrama: CrucigramaService;
  listaImg = [];
  vidas: number = 6;
  puntaje: number = 0;
  pos = 0;
  urlImg: string;
  letra: string;
  animal: string;
  cantidad: number = 0;
  terminar = true;


  constructor() { 
    this.figura = new Figura();
    this.crucigrama = new CrucigramaService();
    this.listaImg = this.crucigrama.cargarImagenes();
    this.urlImg = this.listaImg[0].url;
    this.animal = this.listaImg[0].espaniol;
    this.figura = this.listaImg[0];

  }

  ngOnInit(): void {
  }

  public inicializar():void{
    this.vidas = 6;
    this.puntaje = 0;
    this.terminar = true;
    this.letra = "";
    this.urlImg = this.urlImg = this.listaImg[0].url;
    this.animal = this.listaImg[0].espaniol;
  }


}
