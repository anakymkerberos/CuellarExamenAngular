import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {

  author: string;
  quote: string;
  funSegundoBoton: boolean;
  funTercerBoton: boolean;
  funCuartoBoton: boolean;
  funQuintoBoton: boolean;
  funEggBoton: boolean;
  eggMensaje: string[] = ['El mensaje del Dia', 'Yo soy tu PADRE....', 'Lo dijo: AnakymKerberos@Gmail.com', 'A: su APP'];

  constructor(private servicio1: MiServicioService) {
  }

  ngOnInit() {
    this.getQuotes();
    this.funSegundoBoton = true;
    this.funTercerBoton = true;
    this.funCuartoBoton = true;
    this.funQuintoBoton = true;
    this.funEggBoton = false;
  }

  metodoSegundoBoton() {
    this.funSegundoBoton = !this.funSegundoBoton;
    this.metodoEgg();
  }

  metodoTercerBoton() {
    this.funTercerBoton = !this.funTercerBoton;
    this.metodoEgg();
  }

  metodoCuartoBoton() {
    this.funCuartoBoton = !this.funCuartoBoton;
    this.metodoEgg();
  }

  metodoQuintoBoton() {
    this.funQuintoBoton = !this.funQuintoBoton;
  }

  metodoEgg() {
    this.funEggBoton = false;
    if (!this.funSegundoBoton && this.funTercerBoton && !this.funCuartoBoton) {
      this.funEggBoton = true;
    }
  }
  getQuotes() {
    return this.servicio1.getQuotes()
      .subscribe(data => {
        this.author = data.author;
        this.quote = data.quote;
        return data;
      });
  }
}
