import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-day2-2',
  templateUrl: './day2-2.component.html',
  styleUrls: ['./day2-2.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day22Component implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
