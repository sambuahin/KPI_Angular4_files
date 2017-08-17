import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day4-1',
  templateUrl: './day4-1.component.html',
  styleUrls: ['./day4-1.component.css'],
     animations: [moveIn(), fallIn()]
})
export class Day41Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
