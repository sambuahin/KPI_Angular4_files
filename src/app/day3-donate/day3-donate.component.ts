import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day3-donate',
  templateUrl: './day3-donate.component.html',
  styleUrls: ['./day3-donate.component.css'],
     animations: [moveIn(), fallIn()]
})
export class Day3DonateComponent implements OnInit {
    state: string = '';
    error: any;

  constructor() { }
   onClickMe(){
    
  }

  ngOnInit() {
  }

}
