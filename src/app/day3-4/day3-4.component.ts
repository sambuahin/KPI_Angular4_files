import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-4',
  templateUrl: './day3-4.component.html',
  styleUrls: ['./day3-4.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day34Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
