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
    if (!this.funSegundoBoton && this.funTercerBoton && !this.funCuartoBoton && this.funQuintoBoton) {
      this.funEggBoton = true;
    }
    else {
      this.funEggBoton = false;
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
