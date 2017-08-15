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
import { AchievingGrowthIctComponent } from './achieving-growth-ict/achieving-growth-ict.component';
import { BiblicalAssumptionOfGivingComponent } from './biblical-assumption-of-giving/biblical-assumption-of-giving.component';
import { GodsRubricComponent } from './gods-rubric/gods-rubric.component';
import { EmailAuthComponent } from './email-auth/email-auth.component';
import { DayDonationsComponent } from './day-donations/day-donations.component';
import { Day11Component } from './day1-1/day1-1.component';
import { Day12Component } from './day1-2/day1-2.component';
import { Day13Component } from './day1-3/day1-3.component';
import { Day14Component } from './day1-4/day1-4.component';
import { Day15Component } from './day1-5/day1-5.component';
import { ACTsComponent } from './acts/acts.component';
import { Day2Component } from './day2/day2.component';
import { Day21Component } from './day2-1/day2-1.component';
import { Day22Component } from './day2-2/day2-2.component';
import { Day23Component } from './day2-3/day2-3.component';
import { Day24Component } from './day2-4/day2-4.component';
import { Day25Component } from './day2-5/day2-5.component';
import { Day3Component } from './day3/day3.component';
import { Day31Component } from './day3-1/day3-1.component';
import { Day32Component } from './day3-2/day3-2.component';
import { Day33Component } from './day3-3/day3-3.component';
import { Day34Component } from './day3-4/day3-4.component';
import { Day35Component } from './day3-5/day3-5.component';
import { Day1DonateComponent } from './day1-donate/day1-donate.component';
import { Day1actsComponent } from './day1acts/day1acts.component';



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
    HowIGrowInComponent,
    AchievingGrowthIctComponent,
    BiblicalAssumptionOfGivingComponent,
    GodsRubricComponent,
    EmailAuthComponent,
    DayDonationsComponent,
    Day11Component,
    Day12Component,
    Day13Component,
    Day14Component,
    Day15Component,
    ACTsComponent,
    Day2Component,
    Day21Component,
    Day22Component,
    Day23Component,
    Day24Component,
    Day25Component,
    Day3Component,
    Day31Component,
    Day32Component,
    Day33Component,
    Day34Component,
    Day35Component,
    Day1DonateComponent,
    Day1actsComponent

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
