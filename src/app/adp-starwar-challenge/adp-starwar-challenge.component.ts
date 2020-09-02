import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character-service';
import { Character } from '../models/Character';
import { CharacterDetails } from '../models/CharacterDetails';
import { Film } from '../models/Film';

@Component({
  selector: 'app-adp-starwar-challenge',
  templateUrl: './adp-starwar-challenge.component.html'
})
export class AdpStarwarChallengeComponent implements OnInit {

  public characters: Character[] = [];
  public characterDetails: CharacterDetails;
  public films: Film[] = [];
  public error;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe( (res) => {
      this.error = null;
      this.characters = res;
    },
      (err) => {
        this.handleError(err);
      });
  }

  public getCharacterDetails(character: Character) {
    this.characterService.getCharacterDetails(character).subscribe( (res) => {
      this.error = null;
      this.characterDetails = res;
      this.getFilms(this.characterDetails.films);
    },
      (err) => {
        this.handleError(err);
      });
  }

  public getFilms(films) {
    this.films = [];
    const temp = [];
    films.forEach((filmUrl, index) => {
      this.characterService.getFilm(filmUrl).subscribe( (res) => {
        this.error = null;
        temp.push(res);
        if (index === films.length - 1) {
          this.films = temp;
        }
      },
        (err) => {
          this.handleError(err);
        });
    });
  }

  public handleError(err) {
    this.error = err;
  }

}
