import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft, moveInRight} from '../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft(), moveInRight()]
  //host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
