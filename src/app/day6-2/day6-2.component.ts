import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day6-2',
  templateUrl: './day6-2.component.html',
  styleUrls: ['./day6-2.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day62Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
