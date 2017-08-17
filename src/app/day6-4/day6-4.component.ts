import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day6-4',
  templateUrl: './day6-4.component.html',
  styleUrls: ['./day6-4.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day64Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
