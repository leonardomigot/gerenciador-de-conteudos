import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes/filmes.component';
import { RouterModule } from '@angular/router';
import { ImagensComponent } from './imagens/imagens.component';
import { MusicasComponent } from './musicas/musicas.component';
import { FilmeDetailComponent } from './filme-detail/filme-detail.component';

const routes = [
  { path: 'filmes', component: FilmesComponent },
  { path: 'filmes/:id', component: FilmeDetailComponent },
  { path: 'imagens', component: ImagensComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'musicas/:id', component: MusicasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
