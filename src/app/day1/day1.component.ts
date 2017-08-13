import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css'],
  animations: [moveIn(), fallIn()]
  //host: {'[@moveIn]': ''}
})
export class Day1Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
