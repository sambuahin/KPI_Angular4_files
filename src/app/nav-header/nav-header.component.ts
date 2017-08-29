import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
//import { CollapseDirective } from 'ng2-bootstrap';
import { Router } from '@angular/router';
import { CurrentUserModel} from 'models/current-user-model';
//import {LoginRegisterModel} from 'models/login-register-model';
import { AngularFire, AuthProviders, AuthMethods,FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit,DoCheck, OnDestroy {
  name: any;
  email: any;
   public isCollapsed: boolean;
  public loginLogoutLink;
  public nm;
  public authStatus: FirebaseAuthState;
  public currentUser: CurrentUserModel;
  userSubscription;

  constructor(private af: AngularFire, private router: Router) { 
     this.isCollapsed = true;
    this.currentUser = new CurrentUserModel(null, null, null);
    //this.currentUser = new CurrentUserModel(null, null, null);

  }

  ngOnInit() {
     this.af.auth.subscribe(auth => {
      this.authStatus = auth;
      if (auth == null)
      { 
        this.loginLogoutLink = 'Login'; 
       
      }
      else
      {
        this.loginLogoutLink = 'Logout';
 
        // get the current users data here
        this.currentUser.uid = auth.auth.uid;
        this.userSubscription = this.af.database.object(`/users/${auth.auth.uid}`).subscribe(snapshot => {
  
          this.currentUser.name = snapshot['name'];
        });
      }
    });
    console.log('OnInit called, subscribing to Authentication');
  }

 ngDoCheck()
  {
    if(this.authStatus == null)
    {
      this.loginLogoutLink = 'Login/Signup';
    }
    else
    {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
      this.nm= 'Logout: '+ this.name.auth.email;
      
      this.loginLogoutLink = this.nm;
      
    }
  }

  handleLoginLogoutLink()
  {
    this.isCollapsed = true;
    if(this.loginLogoutLink === 'Login/Signup')
    {
      this.router.navigate(['/email_auth']);
    }
    else
    {
      this.userSubscription.unsubscribe();
      this.router.navigate(['/']);
      this.af.auth.logout();
    }
  }


 logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/');
  }

  homeRedirect()
  {
    this.isCollapsed = true;
    this.router.navigate(['/']);
  }

  ngOnDestroy()
  {
    this.af.auth.unsubscribe();
    console.log('OnDestroy called, unsubsribing');
  }

}
