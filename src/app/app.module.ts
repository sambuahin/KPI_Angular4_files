import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { FooterComponent } from './footer/footer.component';
import { EmailAuthComponent } from './email-auth/email-auth.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAECATPwNhl6RUwR6jEYyXx74WPmYEOHj4",
    authDomain: "continental6112.firebaseapp.com",
    databaseURL: "https://continental6112.firebaseio.com",
    projectId: "continental6112",
    storageBucket: "continental6112.appspot.com",
    messagingSenderId: "69541969541"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ContentComponent,
    ContentMenuComponent,
    Day1Component,
    NavHeaderComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    FooterComponent,
    EmailAuthComponent




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
