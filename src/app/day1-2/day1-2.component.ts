import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1-2',
  templateUrl: './day1-2.component.html',
  styleUrls: ['./day1-2.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day12Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
