import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day6-1',
  templateUrl: './day6-1.component.html',
  styleUrls: ['./day6-1.component.css'],
      animations: [moveIn(), fallIn()]
})
export class Day61Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
