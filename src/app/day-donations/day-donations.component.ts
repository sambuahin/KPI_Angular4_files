import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-day-donations',
  templateUrl: './day-donations.component.html',
  styleUrls: ['./day-donations.component.css'],
    animations: [moveIn(), fallIn()]
})
export class DayDonationsComponent implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
