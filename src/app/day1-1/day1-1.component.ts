import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day1-1',
  templateUrl: './day1-1.component.html',
  styleUrls: ['./day1-1.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day11Component implements OnInit {
  state: string = '';
    error: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
