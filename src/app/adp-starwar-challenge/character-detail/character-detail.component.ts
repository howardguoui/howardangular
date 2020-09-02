import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})

// Dumb/presentation component
export class CharacterDetailComponent implements OnInit, OnChanges {

  @Input() characters;
  @Input() films;
  @Input() error;
  @Output() outputSelect: EventEmitter<any> = new EventEmitter<{character:Object}>();;

  constructor() { }

  ngOnInit() {
  }

  public onSelect(character: Character) {
    this.outputSelect.emit(character);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.character contains the old and the new value...
  }

}
