import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
    animations: [moveIn(), fallIn()]
})
export class ContentComponent implements OnInit {
name: any;
  constructor(public af: AngularFire,private router: Router) { 

       this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  ngOnInit() {
  }
    logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/email_auth');
  }

}
