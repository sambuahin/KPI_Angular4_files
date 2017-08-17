import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-6',
  templateUrl: './day5-6.component.html',
  styleUrls: ['./day5-6.component.css'],
      animations: [moveIn(), fallIn()]
})
export class Day56Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
