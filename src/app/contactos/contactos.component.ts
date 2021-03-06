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
  private _contactoSelecctionado: Contacto;

  //Para hacer una inyección de dependencias debemos indicar en el constructor
//de una clase un parametro tipado precisamente con el servicio que queremos usar.
//Además debemos añadir siempre el modificador de acceso. 
  constructor(private _contactosService: ContactosService){

  }

 /*Este método es de obligatoria implementación cuando usamos la interfaz OnInit.
  Puesto que no retorna nada, podemos anotarlo como 'void'. Este método se ejecuta al instanciarse la clase 
  'AppComponent'*/
  ngOnInit() {
    
    this._contactosService
        .obtenerContactos()
        //Solo cuandno nos suscribimos a un 'Observable' con la funcion 'subscribe'
        // este objseto se invoca y se realizan todas las operaciones indicadas.
        .subscribe((contactos: Contacto[]) => {
          this._contactos = contactos;

        });
  }

  // Este manejador se encarga de mostrar un mensaje con el contacto indicado.
  notificacionEliminacionContacto(contacto: Contacto): void {
    if (confirm(`¿Estás seguro de querer eliminar a ${contacto.nombre}?`)){
      this._contactosService
          .eliminarContacto(contacto)
          .subscribe(
            //Si todo va bien
            (contactoEliminado: Contacto) => {
            this._contactos = this._contactos.filter((c: Contacto): boolean => {
             return c.id !== contactoEliminado.id;
            });
          });
    }
  }

  verDetalles(contacto: Contacto): void{
    this._contactoSelecctionado = contacto;
  }

}
