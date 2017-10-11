import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day1-donate',
  templateUrl: './day1-donate.component.html',
  styleUrls: ['./day1-donate.component.css'],
  animations: [moveIn(), fallIn()]
})
export class Day1DonateComponent implements OnInit {
     state: string = '';
    error: any;

  constructor() { }
   onClickMe(){
    
  }

  ngOnInit() {
  }

}
