import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: Character;
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
