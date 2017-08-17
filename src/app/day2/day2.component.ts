import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day2Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
