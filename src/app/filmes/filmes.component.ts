import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../filme';

// Service 
import { FilmeSerService } from '../filme-ser.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  // Data:
  filmes: Filme[] = [];

  // Selected: 
  selectedFilme?: Filme;

  onSelect(filme: Filme): void {
    this.selectedFilme = filme;
  }

  add(nomeDoFilme: string, strRating: string): void {
    let rating = parseInt(strRating);
    nomeDoFilme = nomeDoFilme.trim();
    if (!nomeDoFilme) { return; }
    this.filmeService.addFilme({ nomeDoFilme, rating } as Filme)
      .subscribe(filme => {
        this.filmes.push(filme);
      });
  }

  delete(filme: Filme): void {
    this.filmes = this.filmes.filter(f => f !== filme);
    this.filmeService.deleteFilme(filme.id).subscribe();
  }

  constructor(private filmeService: FilmeSerService) { }

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes(): void {
    this.filmeService.getFilmes()
      .subscribe(filmes => this.filmes = filmes);    
  }

}
