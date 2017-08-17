import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-1',
  templateUrl: './day5-1.component.html',
  styleUrls: ['./day5-1.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day51Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
