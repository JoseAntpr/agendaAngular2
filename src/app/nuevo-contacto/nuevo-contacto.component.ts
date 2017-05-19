import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {ContactosService} from '../contactos.service';

import {Contacto} from '../contacto'

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  //Para hacer una inyección de dependencias debemos indicar en el constructor
//de una clase un parametro tipado precisamente con el servicio que queremos usar.
//Además debemos añadir siempre el modificador de acceso. 
  constructor(
    private _contactosService: ContactosService,
    private _router: Router) {}

  ngOnInit() {
  }

  darAltaContacto(contacto: Contacto): void{
    this._contactosService.crearContacto(contacto);
    alert('El contacto se ha creado correctamente.');
    this._router.navigate(["/contactos"]);
    
  }

}
