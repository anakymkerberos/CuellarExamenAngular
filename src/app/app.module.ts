import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';

import { HttpClientModule } from '@angular/common/http';

import { MiServicioService } from './mi-servicio.service';
import { MiDirectivaDirective } from './mi-directiva.directive';


@NgModule({
  declarations: [
    AppComponent,
    ConsumidorComponent,
    MiDirectivaDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
