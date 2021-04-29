import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos-musicales',
  templateUrl: './generos-musicales.component.html',
  styleUrls: ['./generos-musicales.component.css']
})
export class GenerosMusicalesComponent implements OnInit {

  constructor() { }

  lista:any[]=[]
  async ngOnInit() {

    const respuesta = await fetch('http://localhost:8080/listargenero')
    const respuesta2 = await respuesta.json()

    this.lista = respuesta2
    console.log(this.lista)
  }

}
