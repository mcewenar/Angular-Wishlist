import { Component, OnInit, Input, HostBinding } from '@angular/core'; //Aquí se importan todos los "artefactos" (clases, decoradores,etc.)
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje; //nombre susceptible de ser pasado como parámetro
  @HostBinding('attr.class') cssClass = 'col-md-4'
  constructor() {  //Construye un objeto en js 
  }

  ngOnInit() {
  }

}
