import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-day2-4',
  templateUrl: './day2-4.component.html',
  styleUrls: ['./day2-4.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day24Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
