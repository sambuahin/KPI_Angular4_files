import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
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
import { EmailAuthComponent } from './email-auth/email-auth.component';

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
       /*   { path: 'acts', component: ACTsComponent} ,*/

        ]

 },
    { path: 'about_us', component: AboutUsComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
