import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Observable<Character>;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.character = this.http.getCharacter();
  }

}
