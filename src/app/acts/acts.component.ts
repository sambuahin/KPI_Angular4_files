import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css'],
    animations: [moveIn(), fallIn()]
})
export class ACTsComponent implements OnInit {
  state: string = '';
    error: any;

  constructor() { }

  ngOnInit() {
  }

}
