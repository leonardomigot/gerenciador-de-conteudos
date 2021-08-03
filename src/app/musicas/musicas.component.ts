import { Component, OnInit } from '@angular/core';
import { Musica } from './musica';
import { MusicasService } from './musicas.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {

  musicas: Musica[] = [];

  constructor(private musicasService: MusicasService) { } 

  add(nomeDaMusica: string, autor: string): void {
    // this.musicas.push( {nomeDaMusica, autor} as Musica);

    this.musicasService.addMusica({ nomeDaMusica, autor } as Musica)
      .subscribe(musica => {
        this.musicas.push(musica);
      });
  }



  delete(musica: Musica) {
    this.musicas = this.musicas.filter(m => m !== musica);
  }

  getMusicas(): void {
    this.musicasService.getMusicas().subscribe(m => this.musicas = m);
  }

  ngOnInit(): void {
    this.getMusicas();
  }
}
