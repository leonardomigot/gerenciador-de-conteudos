import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Musica } from './musica';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private musicasUrl = 'api/musicas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMusicas(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.musicasUrl);
  }

  addMusica(musica: Musica): Observable<Musica> {
    return this.http.post<Musica>(this.musicasUrl, musica, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
