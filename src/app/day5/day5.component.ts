import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day5Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}