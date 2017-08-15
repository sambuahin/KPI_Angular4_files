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
import { Day1actsComponent } from './day1acts/day1acts.component';





import { NavHeaderComponent } from './nav-header/nav-header.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//sets the homepage
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'email_auth', component: EmailAuthComponent},
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'content', component: ContentComponent, canActivate: [AuthGuard],
  
    children: [
          { path: '', redirectTo: 'day1', pathMatch: 'full' },
          { path: 'day1', component: Day1Component } ,
          { path: 'day1_1', component: Day11Component},   
          { path: 'day1_2', component: Day12Component}, 
          { path: 'day1_3', component: Day13Component},  
          { path: 'day1_4', component: Day14Component},  
          { path: 'day1_5', component: Day15Component},      
          { path: 'day1Donate', component: Day1DonateComponent},
          { path: 'day1acts', component: Day1actsComponent} ,

          { path: 'day2', component: Day2Component } ,
          { path: 'day2_1', component: Day21Component},   
          { path: 'day2_2', component: Day22Component}, 
          { path: 'day2_3', component: Day23Component},  
          { path: 'day2_4', component: Day24Component},  
          { path: 'day2_5', component: Day25Component},  

          { path: 'day3', component: Day3Component } ,
          { path: 'day3_1', component: Day31Component},   
          { path: 'day3_2', component: Day32Component}, 
          { path: 'day3_3', component: Day33Component},  
          { path: 'day3_4', component: Day34Component},  
          { path: 'day3_5', component: Day35Component},  
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