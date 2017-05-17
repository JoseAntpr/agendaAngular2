import { Injectable } from '@angular/core';

//Una clase decorada con 'Injectable' se comporta como un servicio. Este decorador hace posible
// que el servicio pueda inyectarse como dependencia en otras clases.
@Injectable()
export class ContactosService {

  private _contactos: string[] = [
      "Tim Cook",
      "Elon Musk",
      "Bill Gates",
      "Chiquito de la Calzada"
    ];

//Obtiene una colección de contactos
  obtenerContactos(): string[] {
    return this._contactos

  }

  //Elimina el contacto indicado
  eliminarContacto(contacto: string): void{
    this._contactos = this._contactos.filter((c: string): boolean => {
      return c !== contacto;
    });
  } 

}
