import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day4-2',
  templateUrl: './day4-2.component.html',
  styleUrls: ['./day4-2.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day42Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
