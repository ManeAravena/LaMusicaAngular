import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GenerosMusicalesComponent } from './components/generos-musicales/generos-musicales.component';
import { NuestrosArtistasComponent } from './components/nuestros-artistas/nuestros-artistas.component';
import { BannerComponent } from './components/banner/banner.component';
import { MisionComponent } from './components/about-us/mision/mision.component';
import { VisionComponent } from './components/about-us/vision/vision.component';
import { NosotrosComponent } from './components/about-us/nosotros/nosotros.component';
import { DetallesComponent } from './components/nuestros-artistas/detalles/detalles.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenerosMusicalesComponent,
    NuestrosArtistasComponent,
    BannerComponent,
    MisionComponent,
    VisionComponent,
    NosotrosComponent,
    DetallesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
