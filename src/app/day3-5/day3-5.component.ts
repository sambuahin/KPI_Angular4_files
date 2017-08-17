import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-5',
  templateUrl: './day3-5.component.html',
  styleUrls: ['./day3-5.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day35Component implements OnInit {
  state: string = '';
    error: any;


  constructor() { }

  ngOnInit() {
  }

}
