
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';


@Component({
  selector: 'app-executive-welcome',
  templateUrl: './executive-welcome.component.html',
  styleUrls: ['./executive-welcome.component.css'],
    animations: [moveIn(), fallIn()]
})
export class ExecutiveWelcomeComponent implements OnInit {
   state: string = '';
    error: any;

      constructor(public af: AngularFire,private router: Router) {
      this.af.auth.subscribe(auth => {
        if(auth) {
         //this.name = auth;
          this.router.navigateByUrl('/executive_welcome');
        }
      });

  }

  ngOnInit() {


  }

}
