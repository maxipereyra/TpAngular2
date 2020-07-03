import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  // simular fuente de datos
  ventas: Array<Pasaje>;
  
  constructor() { 
    this.ventas=new Array<Pasaje>();
  }
  

  /// metodos del service

  ListVenta(){
    return this.ventas;
  }
  
  grabarVenta(venta: Pasaje){
    this.ventas.push(venta);
  }

  modificarVenta(){
    /// falta codificar
  }

  eliminarVenta(){
    /// falta codificar
  }
  
}
