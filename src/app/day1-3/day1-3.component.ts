import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1-3',
  templateUrl: './day1-3.component.html',
  styleUrls: ['./day1-3.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day13Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
