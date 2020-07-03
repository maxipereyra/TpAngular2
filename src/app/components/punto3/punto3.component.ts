import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';


@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  venta: Pasaje;
  precio_descuento: number = 0;
  precio_actual: number = 0;
  ventas: Array<Pasaje>;
  visible: boolean = false;

  constructor(private ventaservice: VentasService) {
    this.venta = new Pasaje();
    this.ventas = new Array<Pasaje>();
    this.listVenta(); // refresca lista venta
  }

  ngOnInit(): void {
  }

  public grabarVenta(){
    this.venta.fechacompra=new Date();
    // llamar al metodo de webservice
    this.ventaservice.grabarVenta(this.venta);
    this.listVenta();  /// refresca lista venta
    this.venta = new Pasaje();
    this.visible = true;
    this.precio_actual=0;
    this.precio_descuento=0;
  }

  public listVenta(){
    // llama al metodo ws
    this.ventas=this.ventaservice.ListVenta();
  }

  public limpiarVenta(){
    this.venta = new Pasaje();
  }

  elegirVenta(venta: Pasaje){
    this.venta = venta;
  }

  borrarVenta(venta: Pasaje){
   // this.ventaservice.eliminarVenta(venta.dnipasajero);
    this.listVenta();  //refresca la lista
  }

  public calcularDescuento(){
    if(this.venta.categoriapasajero=="m")
    {
      this.precio_descuento=(this.venta.precio*25)/100;
      this.precio_actual = this.venta.precio - this.precio_descuento;
      this.visible = true;
    }
    if(this.venta.categoriapasajero=="j")
    {
      this.precio_descuento=(this.venta.precio*50)/100;
      this.precio_actual = this.venta.precio - this.precio_descuento;
      this.visible = true;
    }

  }
}
