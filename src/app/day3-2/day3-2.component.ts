import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-2',
  templateUrl: './day3-2.component.html',
  styleUrls: ['./day3-2.component.css'],
      animations: [moveIn(), fallIn()]
})
export class Day32Component implements OnInit {
 state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
