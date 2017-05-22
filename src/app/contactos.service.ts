import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//Desde esta libreria extendemos los operadores por defecto de los 
//objeyos 'Observabes' DE RxJS
import 'rxjs/add/operator/map';

import { Contacto } from './contacto';
import { ApiUrl } from './configuracion';

//Una clase decorada con 'Injectable' se comporta como un servicio. Este decorador hace posible
// que el servicio pueda inyectarse como dependencia en otras clases.
@Injectable()
export class ContactosService {

//Para poder hacer peticiones HTTP necesitamos el cliente correspondiente. Tenemos
// que inyectarlo como dependencia para usarlo en el servicio.
  constructor(
    private _http: Http,
    //Cuando solicitamos la inyección de dependenciaas de un valor, tenemos que usar siempre
    //el decorador 'Inject' indicando el token correspondiente
    @Inject(ApiUrl) private  _apiUrl
    
    ){}

//Obtiene una colección de contactos
  obtenerContactos(): Observable<Contacto[]> {
    //return this._contactos;
    return this._http
              .get(`${this._apiUrl}contactos`)
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
        .post(`${this._apiUrl}contactos`, contacto)
        .map((respuesta: Response) => {
          return respuesta.json() as Contacto;
        })
  }

  //Elimina el contacto indicado
  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
              .delete(`${this._apiUrl}contactos/${contacto.id}`)
              .map(() => {
                return  contacto;
              });

  } 

}
