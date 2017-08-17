import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-day4-6',
  templateUrl: './day4-6.component.html',
  styleUrls: ['./day4-6.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day46Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
