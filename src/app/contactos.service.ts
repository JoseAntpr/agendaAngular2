import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//Desde esta libreria extendemos los operadores por defecto de los 
//objeyos 'Observabes' DE RxJS
import 'rxjs/add/operator/map';

import { Contacto } from './contacto';

//Una clase decorada con 'Injectable' se comporta como un servicio. Este decorador hace posible
// que el servicio pueda inyectarse como dependencia en otras clases.
@Injectable()
export class ContactosService {

  private _contactos: Contacto[] = [
      new Contacto("Tim Cook"),
      new Contacto("Elon Musk"),
      new Contacto("Bill Gates"),
      new Contacto("Chiquito de la Calzada")
    ];
//Para poder hacer peticiones HTTP necesitamos el cliente correspondiente. Tenemos
// que inyectarlo como dependencia para usarlo en el servicio.
  constructor(private _http: Http){}

//Obtiene una colección de contactos
  obtenerContactos(): Observable<Contacto[]> {
    //return this._contactos;
    return this._http
              .get('http://localhost:3004/contactos')
              //Con el operado 'map' transformamos el observable<Response> que
              //retorna la función 'get' en un 'Observable<Contaco[]> que es lo que
              //Realmente necesitamos
              .map((respuesta: Response) =>{
               return respuesta.json() as Contacto[];
              });

  }
  //Añadir el contacto indicado
  crearContacto(contacto: Contacto): Observable<Contacto>{
    return this._http
        .post('http://localhost:3004/contactos', contacto)
        .map((respuesta: Response) => {
          return respuesta.json() as Contacto;
        })
  }

  //Elimina el contacto indicado
  eliminarContacto(contacto: Contacto): void{
    this._contactos = this._contactos.filter((c: Contacto): boolean => {
      return c.nombre !== contacto.nombre;
    });
  } 

}
