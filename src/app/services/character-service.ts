import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { CharacterDetails } from '../models/CharacterDetails';
import { Film } from '../models/Film';

@Injectable()
export class CharacterService {

  private localJsonPath = 'assets/characters.json';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.localJsonPath);
  }

  getCharacterDetails(character: Character): Observable<CharacterDetails> {
    return this.httpClient.get<CharacterDetails>(character.url);
  }

  getFilm(url): Observable<Film> {
    return this.httpClient.get<Film>(url);
  }

}
