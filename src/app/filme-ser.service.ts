import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Class Filme:
import { Filme } from './filme';

//Observable:
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeSerService {

  private filmesUrl = 'api/filmes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.filmesUrl);
  }

  getFilme(id: number): Observable<Filme> {
    const url = `${this.filmesUrl}/${id}`;
    return this.http.get<Filme>(url);
  }

  updateFilme(filme: Filme): Observable<any> {
    return this.http.put(this.filmesUrl, filme, this.httpOptions);
  }

  addFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.filmesUrl, filme, this.httpOptions);
  }

  deleteFilme(id: number): Observable<Filme> {
    const url = `${this.filmesUrl}/${id}`;
    return this.http.delete<Filme>(url);
  }
 
  constructor(private http: HttpClient) { }

}
