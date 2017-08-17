import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day6-3',
  templateUrl: './day6-3.component.html',
  styleUrls: ['./day6-3.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day63Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
