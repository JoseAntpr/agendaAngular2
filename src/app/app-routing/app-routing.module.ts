import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {ContactosComponent} from '../contactos/contactos.component'
import {NuevoContactoComponent} from '../nuevo-contacto/nuevo-contacto.component'

//Definimos las rutas que va a soportar nuestra app. Las rutas tienens como propuedas las siguientes:
// - path -> ruta a navegar
// - component -> Componente encargado de responder a la ruta cuando se navega
// Si queremos controlar rutas no definidas tenemos que indicar como 'path' . doble asterisco
//Además de establecer el 'pathMatch' como 'full'.
const routes: Routes = [
  {
    path: "contactos",
    component: ContactosComponent
  },
  {
    path: "nuevo-contacto",
    component: NuevoContactoComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/contactos"

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
