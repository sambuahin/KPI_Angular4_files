import { Component, OnInit } from '@angular/core';
import { ResetPasswordModel } from '../../models/reset-password-model';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 model: ResetPasswordModel;
  resetPasswordToastErrorHidden: boolean;
  toastSuccessfulResetPasswordMessage: boolean;
  constructor(private af: AngularFire, private router: Router)
  {
   
  }

  resetPassword()
  {/*
    this.af.auth.login( {email: this.model.email, password: this.model.oldPassword} )
    .then(auth => {
        if(auth.auth.emailVerified)
        {
          //console.log('This email has been verified');
          // update the pass word
          if (this.model.newPassword === this.model.confirmPassword && this.model.newPassword !== '')
          {
            console.log('Success sending password change');
            this.changePassword(this.model.newPassword);
            this.SuccessfulResetPasswordMessage();
            this.toastSuccessfulResetPasswordMessage = false;
            this.resetPasswordToastErrorHidden = true; 
          }
        }
        else
        {
          console.log('This email has not been verified');
          this.resetPasswordToastErrorHidden = true;

        }
    })
    .catch(error => {
      this.resetPasswordToastErrorHidden = false;
      this.toastSuccessfulResetPasswordMessage = true;
      //this.toastSuccessfulResetPasswordMessage = true;
      console.log(error);
      console.log('this.model.email = '+ this.model.email);
      console.log('this.model.oldPassword = '+ this.model.oldPassword);
      console.log('this.model.newPassword = '+ this.model.newPassword);
      console.log('this.model.confirmPassword = '+ this.model.confirmPassword);
    }); */

    

  }
/*
  var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
*/

 // constructor() { }

  ngOnInit() {
  }

}
