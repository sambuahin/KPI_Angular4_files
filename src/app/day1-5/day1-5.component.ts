import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1-5',
  templateUrl: './day1-5.component.html',
  styleUrls: ['./day1-5.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day15Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
