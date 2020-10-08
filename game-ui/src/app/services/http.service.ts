import { Injectable } from '@angular/core';
import {Character, characters} from '../models/character';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getCharacters(): Observable<Character[]>{
    return of(characters);
  }

  getCharacter(): Observable<Character>{
    return of(characters[0]);
  }
}
