import { Injectable } from '@angular/core';
import { Figura } from '../models/figura';

@Injectable({
  providedIn: 'root'
})
export class CrucigramaService {
  

  constructor() { }

  public cargarImagenes(){
    
    let lista = [
      {espaniol: 'leon', ingles: 'leon', url:'assets/juego/leon.jpg'},
      {espaniol: 'perro', ingles: 'perro', url:'assets/juego/perro.jpg'}
    ]
    return lista;
  }

  public obtenerFigura(lista: Array<Figura>, posicion: number):Figura{
    return lista[posicion];
  }

  public buscarLetra(figura: Figura, letra: string): number{
    var a = figura.ingles.search(letra);
    return a;
  }



}
