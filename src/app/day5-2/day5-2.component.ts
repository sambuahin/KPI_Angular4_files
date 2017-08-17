import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-2',
  templateUrl: './day5-2.component.html',
  styleUrls: ['./day5-2.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day52Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
