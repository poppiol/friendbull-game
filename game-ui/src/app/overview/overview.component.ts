import {Component, OnInit} from '@angular/core';
import {Character} from '../models/character';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
