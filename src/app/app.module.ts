import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { ContentComponent } from './content/content.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { Day1Component } from './day1/day1.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DonationsComponent } from './donations/donations.component';
import { FiveChristianPersuasionsComponent } from './five-christian-persuasions/five-christian-persuasions.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { TheAbrahamFactorComponent } from './the-abraham-factor/the-abraham-factor.component';
import { TheGodFactorComponent } from './the-god-factor/the-god-factor.component';
import { TheGrowthFactorComponent } from './the-growth-factor/the-growth-factor.component';
import { HowIGrowInComponent } from './how-i-grow-in/how-i-grow-in.component';



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBSq5CduRfRzzjCvYAZSQLYDM4GMr62kGA",
    authDomain: "ttgic-42210.firebaseapp.com",
    databaseURL: "https://ttgic-42210.firebaseio.com",
    projectId: "ttgic-42210",
    storageBucket: "ttgic-42210.appspot.com",
    messagingSenderId: "827252826819"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ContentComponent,
    ContentMenuComponent,
    Day1Component,
    NavHeaderComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    FaqsComponent,
    DonationsComponent,
    FiveChristianPersuasionsComponent,
    FooterComponent,
    TestComponent,
    TheAbrahamFactorComponent,
    TheGodFactorComponent,
    TheGrowthFactorComponent,
    HowIGrowInComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    RouterModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
