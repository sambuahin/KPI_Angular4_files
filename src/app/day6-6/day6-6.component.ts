import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day6-6',
  templateUrl: './day6-6.component.html',
  styleUrls: ['./day6-6.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day66Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
