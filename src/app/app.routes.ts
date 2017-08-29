import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { Day1Component } from './day1/day1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DonationsComponent } from './donations/donations.component';
import { FiveChristianPersuasionsComponent } from './five-christian-persuasions/five-christian-persuasions.component';
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
import { Day2DonateComponent } from './day2-donate/day2-donate.component';
import { Day3DonateComponent } from './day3-donate/day3-donate.component';
import { Day4Component } from './day4/day4.component';
import { Day41Component } from './day4-1/day4-1.component';
import { Day42Component } from './day4-2/day4-2.component';
import { Day43Component } from './day4-3/day4-3.component';
import { Day44Component } from './day4-4/day4-4.component';
import { Day45Component } from './day4-5/day4-5.component';
import { Day46Component } from './day4-6/day4-6.component';
import { Day5Component } from './day5/day5.component';
import { Day51Component } from './day5-1/day5-1.component';
import { Day52Component } from './day5-2/day5-2.component';
import { Day53Component } from './day5-3/day5-3.component';
import { Day54Component } from './day5-4/day5-4.component';
import { Day55Component } from './day5-5/day5-5.component';
import { Day56Component } from './day5-6/day5-6.component';
import { Day6Component } from './day6/day6.component';
import { Day61Component } from './day6-1/day6-1.component';
import { Day62Component } from './day6-2/day6-2.component';
import { Day63Component } from './day6-3/day6-3.component';
import { Day64Component } from './day6-4/day6-4.component';
import { Day65Component } from './day6-5/day6-5.component';
import { Day66Component } from './day6-6/day6-6.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { NavHeaderComponent } from './nav-header/nav-header.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//sets the homepage
    { path: 'home', component: HomeComponent },
    { path: 'reset_password', component: ResetPasswordComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'email_auth', component: EmailAuthComponent},
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'content', component: ContentComponent, canActivate: [AuthGuard],
  
    children: [
          { path: '', redirectTo: 'day1', pathMatch: 'full' },
          { path: 'acts', component: ACTsComponent} ,

          { path: 'day1', component: Day1Component } ,
          { path: 'day1_1', component: Day11Component},   
          { path: 'day1_2', component: Day12Component}, 
          { path: 'day1_3', component: Day13Component},  
          { path: 'day1_4', component: Day14Component},  
          { path: 'day1_5', component: Day15Component},      
          { path: 'day1Donate', component: Day1DonateComponent},
          

          { path: 'day2', component: Day2Component } ,
          { path: 'day2_1', component: Day21Component},   
          { path: 'day2_2', component: Day22Component}, 
          { path: 'day2_3', component: Day23Component},  
          { path: 'day2_4', component: Day24Component},  
          { path: 'day2_5', component: Day25Component},  
          { path: 'day2Donate', component: Day2DonateComponent},

          { path: 'day3', component: Day3Component } ,
          { path: 'day3_1', component: Day31Component},   
          { path: 'day3_2', component: Day32Component}, 
          { path: 'day3_3', component: Day33Component},  
          { path: 'day3_4', component: Day34Component},  
          { path: 'day3_5', component: Day35Component},
          { path: 'day3Donate', component: Day3DonateComponent},  

          { path: 'day4', component: Day4Component } ,
          { path: 'day4_1', component: Day41Component},   
          { path: 'day4_2', component: Day42Component}, 
          { path: 'day4_3', component: Day43Component},  
          { path: 'day4_4', component: Day44Component},  
          { path: 'day4_5', component: Day45Component},
          { path: 'day4_6', component: Day46Component},
    
          { path: 'day5', component: Day5Component } ,
          { path: 'day5_1', component: Day51Component},   
          { path: 'day5_2', component: Day52Component}, 
          { path: 'day5_3', component: Day53Component},  
          { path: 'day5_4', component: Day54Component},  
          { path: 'day5_5', component: Day55Component},
          { path: 'day5_6', component: Day56Component},

          { path: 'day6', component: Day6Component } ,
          { path: 'day6_1', component: Day61Component},   
          { path: 'day6_2', component: Day62Component}, 
          { path: 'day6_3', component: Day63Component},  
          { path: 'day6_4', component: Day64Component},  
          { path: 'day6_5', component: Day65Component},
          { path: 'day6_6', component: Day66Component}

        ]

 },
    //{ path: 'content-menu', component: ContentMenuComponent, canActivate: [AuthGuard] },
    { path: 'about_us', component: AboutUsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'test', component: TestComponent },
    { path: 'the_God_factor', component: TheGodFactorComponent },
    { path: 'the_growth_factor', component: TheGrowthFactorComponent },
    { path: 'how_i_grow', component: HowIGrowInComponent },
    { path: 'donations', component: DonationsComponent },
    { path: 'five_christain_persuasions', component: FiveChristianPersuasionsComponent},
    { path: 'the_abraham_factor', component: TheAbrahamFactorComponent},
    { path: 'acheving_growth_ict', component: AchievingGrowthIctComponent},
    { path: 'biblical_assumption_of_giving', component: BiblicalAssumptionOfGivingComponent},
    { path: 'Gods_rubric', component: GodsRubricComponent},
    { path: '**', component: PageNotFoundComponent }
  

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);