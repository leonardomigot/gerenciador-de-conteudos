import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Filme } from './filme';
import { Musica } from './musicas/musica';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const filmes = [
      { id: 2, nomeDoFilme: 'WWII History', rating: 90 },
      { id: 3, nomeDoFilme: 'Tropa de Elite', rating: 91 },
      { id: 4, nomeDoFilme: 'Policia 24H', rating: 50 },
      { id: 5, nomeDoFilme: 'Madagascar', rating: 80 },
      { id: 6, nomeDoFilme: 'Bob Esponja', rating: 20 },
      { id: 7, nomeDoFilme: 'Stranger Things', rating: 95 },
      { id: 8, nomeDoFilme: 'Rambo', rating: 40 },
      { id: 9, nomeDoFilme: 'Flash', rating: 10 },
      { id: 10, nomeDoFilme: 'Arrow', rating: 50 },
      { id: 11, nomeDoFilme: 'Simpsons', rating: 20 },
      { id: 12, nomeDoFilme: 'Narcos', rating: 35 },
      { id: 13, nomeDoFilme: 'Top Gun', rating: 27 }
    ];
    const musicas = [
      { id: 0, nomeDaMusica: 'Back in Black', autor: 'AC/DC' },
      { id: 2, nomeDaMusica: 'Fundo da grota', autor: 'Baitaca' },
      { id: 4, nomeDaMusica: 'We are the champions', autor: 'Queen' }
    ];
    return {filmes, musicas};
  }

  genId<T extends Filme | Musica>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(filme => filme.id)) + 1 : 11;
  }

  constructor() { }
}
