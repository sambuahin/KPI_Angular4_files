import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-day6-5',
  templateUrl: './day6-5.component.html',
  styleUrls: ['./day6-5.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day65Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
