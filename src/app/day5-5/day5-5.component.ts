import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day5-5',
  templateUrl: './day5-5.component.html',
  styleUrls: ['./day5-5.component.css'],
   animations: [moveIn(), fallIn()]
})
export class Day55Component implements OnInit {
   state: string = '';
    error: any;

  constructor() { }
   onClickMe(){
    
  }

  ngOnInit() {
  }

}
