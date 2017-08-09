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


import { NavHeaderComponent } from './nav-header/nav-header.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//sets the homepage
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'content', component: ContentComponent, canActivate: [AuthGuard] },
    { path: 'content-menu', component: ContentMenuComponent, canActivate: [AuthGuard] },
    { path: 'day1', component: Day1Component, canActivate: [AuthGuard] },
    { path: 'about_us', component: AboutUsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'test', component: TestComponent },
    { path: 'the_God_factor', component: TheGodFactorComponent },
    { path: 'the_growth_factor', component: TheGrowthFactorComponent },
    { path: 'how_i_grow', component: HowIGrowInComponent },
    //{ path: 'nav-header', component: NavHeaderComponent, canActivate: [AuthGuard] },
    { path: 'donations', component: DonationsComponent },
    { path: 'five_christain_persuasions', component: FiveChristianPersuasionsComponent},
    { path: 'the_abraham_factor', component: TheAbrahamFactorComponent},
    { path: '**', component: PageNotFoundComponent }
  

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);