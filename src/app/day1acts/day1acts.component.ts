import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1acts',
  templateUrl: './day1acts.component.html',
  styleUrls: ['./day1acts.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day1actsComponent implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
