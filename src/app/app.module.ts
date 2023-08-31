import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    EnlaceComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
