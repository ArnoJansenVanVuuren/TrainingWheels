import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeI } from '../components/jokes/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  jokeServiceText?: Observable<string>;

  constructor(private http: HttpClient) {}

  getJokeFromServer(jokeCategories: any, jokeContains: string): Observable<JokeI> {
    let params = new HttpParams().set('contains', jokeContains);
    return this.http.get<JokeI>('https://v2.jokeapi.dev/joke/' + jokeCategories, { params });
  }
}
