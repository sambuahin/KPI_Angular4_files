import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day2-5',
  templateUrl: './day2-5.component.html',
  styleUrls: ['./day2-5.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day25Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
