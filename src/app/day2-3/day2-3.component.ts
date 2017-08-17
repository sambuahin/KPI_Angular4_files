import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day2-3',
  templateUrl: './day2-3.component.html',
  styleUrls: ['./day2-3.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day23Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
