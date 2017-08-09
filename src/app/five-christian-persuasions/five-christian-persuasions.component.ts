import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft, moveInRight} from '../router.animations';

@Component({
  selector: 'app-five-christian-persuasions',
  templateUrl: './five-christian-persuasions.component.html',
  styleUrls: ['./five-christian-persuasions.component.css'],
   animations: [moveIn(), fallIn(), moveInLeft(), moveInRight()]
})
export class FiveChristianPersuasionsComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  

}
