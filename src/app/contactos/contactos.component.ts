import { Component, OnInit } from '@angular/core';

import {ContactosService} from '../contactos.service';

import {Contacto} from '../contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  private _contactos: Contacto[];

  //Para hacer una inyección de dependencias debemos indicar en el constructor
//de una clase un parametro tipado precisamente con el servicio que queremos usar.
//Además debemos añadir siempre el modificador de acceso. 
  constructor(private _contactosService: ContactosService){

  }

 /*Este método es de obligatoria implementación cuando usamos la interfaz OnInit.
  Puesto que no retorna nada, podemos anotarlo como 'void'. Este método se ejecuta al instanciarse la clase 
  'AppComponent'*/
  ngOnInit() {
    this._contactos = this._contactosService.obtenerContactos();
  }

  // Este manejador se encarga de mostrar un mensaje con el contacto indicado.
  notificacionEliminacionContacto(contacto: Contacto): void {
    if (confirm(`¿Estás seguro de querer eliminar a ${contacto.nombre}?`)){
      this._contactosService.eliminarContacto(contacto);
      this._contactos = this._contactosService.obtenerContactos();
    }
  }

}
