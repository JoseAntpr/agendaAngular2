import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {ContactosComponent} from '../contactos/contactos.component'
import {NuevoContactoComponent} from '../nuevo-contacto/nuevo-contacto.component'

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
