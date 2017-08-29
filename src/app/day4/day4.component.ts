import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css'],
      animations: [moveIn(), fallIn()]
})
export class Day4Component implements OnInit {
  state: string = '';
    error: any;
    
  constructor() { }

  ngOnInit() {
  }

}