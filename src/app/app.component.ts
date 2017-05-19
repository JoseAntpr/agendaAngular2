import { Component, OnInit } from '@angular/core';

import {ContactosService} from './contactos.service';

import {Contacto} from './contacto'


@Component({
  //Selector CSS del elemento donde se instanciará el componente
  selector: 'app-root',
  //Ruta al template corresponde al componente
  templateUrl: './app.component.html',
  // Ruta al CSS correspondiente al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent  {}


