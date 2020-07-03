import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 20;
  tamTexto: number;

  mensajes: Array<Mensaje>;

  constructor() { 
     this.mensaje = new Mensaje();
     this.mensajes = new Array<Mensaje>();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  public enviarMensaje(){
    this.mensaje.fechaEnvio = new Date();
    this.mensajes.push(this.mensaje);
    this.mensaje = new Mensaje();
  }

  public limpiarMensaje(){
    this.mensaje = new Mensaje();
  }

}
