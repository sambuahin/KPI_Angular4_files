import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day4-3',
  templateUrl: './day4-3.component.html',
  styleUrls: ['./day4-3.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day43Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
