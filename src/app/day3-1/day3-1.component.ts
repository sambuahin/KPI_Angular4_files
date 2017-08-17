import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-1',
  templateUrl: './day3-1.component.html',
  styleUrls: ['./day3-1.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day31Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
