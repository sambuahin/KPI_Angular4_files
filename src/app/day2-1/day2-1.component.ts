import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-day2-1',
  templateUrl: './day2-1.component.html',
  styleUrls: ['./day2-1.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day21Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
