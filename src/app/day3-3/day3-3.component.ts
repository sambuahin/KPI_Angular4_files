import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-3',
  templateUrl: './day3-3.component.html',
  styleUrls: ['./day3-3.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day33Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
