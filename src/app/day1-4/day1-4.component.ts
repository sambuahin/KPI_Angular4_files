import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1-4',
  templateUrl: './day1-4.component.html',
  styleUrls: ['./day1-4.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day14Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
