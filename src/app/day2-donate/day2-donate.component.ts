import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day2-donate',
  templateUrl: './day2-donate.component.html',
  styleUrls: ['./day2-donate.component.css'],
    animations: [moveIn(), fallIn()]
})
export class Day2DonateComponent implements OnInit {
  state: string = '';
    error: any;

  constructor() { }
   onClickMe(){
    
  }

  ngOnInit() {
  }

}
