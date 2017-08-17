import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-4',
  templateUrl: './day5-4.component.html',
  styleUrls: ['./day5-4.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day54Component implements OnInit {
  state: string = '';
    error: any;


  constructor() { }

  ngOnInit() {
  }

}
