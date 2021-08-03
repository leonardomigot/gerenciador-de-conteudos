import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmeDetailComponent } from './filme-detail/filme-detail.component';
import { LateralNavComponent } from './lateral-nav/lateral-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagensComponent } from './imagens/imagens.component';
import { MusicasComponent } from './musicas/musicas.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FilmeDetailComponent,
    LateralNavComponent,
    ImagensComponent,
    MusicasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
