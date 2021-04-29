import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toInicio() {
    document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
  }
  toAboutUs() {
    document.getElementById("about-us")?.scrollIntoView({behavior:"smooth"});
  }
  toNuestrosArtistas() {
    document.getElementById("nuestros-artistas")?.scrollIntoView({behavior:"smooth"});
  }
  toGenerosMusicales(){
    document.getElementById("generos-musicales")?.scrollIntoView({behavior:"smooth"});
  }

}
