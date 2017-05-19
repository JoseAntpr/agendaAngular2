import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import {ContactosService} from './contactos.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component'
@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    ContactosComponent,
    NuevoContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
