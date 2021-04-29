import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-artistas',
  templateUrl: './nuestros-artistas.component.html',
  styleUrls: ['./nuestros-artistas.component.css']
})

export class NuestrosArtistasComponent implements OnInit {

  artista = null;
  constructor() { }

  lista:any[]=[]
  async ngOnInit() {

    const respuesta = await fetch('http://localhost:8080/listarartistas')
    const respuesta2 = await respuesta.json()

    this.lista = respuesta2
    console.log(this.lista)
  }

  onClick(artista: any) {
    this.artista = artista;
  }

  cerrarDetalles() {
    this.artista = null;
  }

}
