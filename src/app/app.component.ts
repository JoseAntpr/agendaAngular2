import { Component, OnInit } from '@angular/core';

import {ContactosService} from './contactos.service';


@Component({
  //Selector CSS del elemento donde se instanciará el componente
  selector: 'app-root',
  //Ruta al template corresponde al componente
  templateUrl: './app.component.html',
  // Ruta al CSS correspondiente al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* Los atributos de clase no necesitan ser definidos con 'let'.
  Aunque los atributos se marquen como privado, siguen siendo 
  visibles en el template */
  private _title: string ;
  private _contactos: string[];


//Para hacer una inyección de dependencias debemos indicar en el constructor
//de una clase un parametro tipado precisamente con el servicio que queremos usar.
//Además debemos añadir siempre el modificador de acceso. 
  constructor(private _contactosService: ContactosService){

  }

  /*Este método es de obligatoria implementación cuando usamos la interfaz OnInit.
  Puesto que no retorna nada, podemos anotarlo como 'void'. Este método se ejecuta al instanciarse la clase 
  'AppComponent'*/
  ngOnInit(): void {
    this._title = 'Super Agenda'
    this._contactos = this._contactosService.obtenerContactos();
  }


  // Este manejador se encarga de mostrar un mensaje con el contacto indicado.
  notificacionEliminacionContacto(contacto: string): void {
    if (confirm(`¿Estás seguro de querer eliminar a ${contacto}?`)){
      this._contactosService.eliminarContacto(contacto);
      this._contactos = this._contactosService.obtenerContactos();
    }
  }
}


