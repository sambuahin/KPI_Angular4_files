import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day3Component implements OnInit {
  state: string = '';
    error: any;


  constructor() { }

  ngOnInit() {
  }

}
