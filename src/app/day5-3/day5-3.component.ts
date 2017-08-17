import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-3',
  templateUrl: './day5-3.component.html',
  styleUrls: ['./day5-3.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day53Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
