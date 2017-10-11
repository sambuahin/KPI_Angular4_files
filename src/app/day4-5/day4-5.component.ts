import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-day4-5',
  templateUrl: './day4-5.component.html',
  styleUrls: ['./day4-5.component.css'],
      animations: [moveIn(), fallIn()]
})
export class Day45Component implements OnInit {
    state: string = '';
    error: any;

  constructor() { }
  onClickMe(){
    
  }

  ngOnInit() {
  }

}
