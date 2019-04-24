import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroductionPage } from '../pages/introduction/introduction';
import { SelectionPage } from '../pages/selection/selection';
import { BandersnatchPage } from '../pages/bandersnatch/bandersnatch';
import { BPage1Page } from '../pages/b-page1/b-page1';
import { Now2Page } from '../pages/now2/now2';
import { ThompsonPage } from '../pages/thompson/thompson';
import { AcceptPage } from '../pages/accept/accept';
import { RefusePage } from '../pages/refuse/refuse';
import { IgnorePage } from '../pages/ignore/ignore';
import { TherapyPage } from '../pages/therapy/therapy';
import { TherapynoPage } from '../pages/therapyno/therapyno';
import { TherapyyesPage } from '../pages/therapyyes/therapyyes';
import { DevelopmentPage } from '../pages/development/development';
import { Ending2Page } from '../pages/ending2/ending2';
import { Development2Page } from '../pages/development2/development2';
import { ShoutPage } from '../pages/shout/shout';
import { ColinPage } from '../pages/colin/colin';
import { LsdPage } from '../pages/lsd/lsd';
import { LsdnoPage } from '../pages/lsdno/lsdno';
import { JumpsPage } from '../pages/jumps/jumps';
import { JumpcPage } from '../pages/jumpc/jumpc';
import { HynesPage } from '../pages/hynes/hynes';
import { DetailsProvider } from '../providers/details/details';
import { DetailsPage } from '../pages/details/details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroductionPage,
    SelectionPage,
    BandersnatchPage,
    BPage1Page,
    Now2Page,
    ThompsonPage,
    AcceptPage,
    RefusePage,
    IgnorePage,
    TherapyPage,
    TherapynoPage,
    TherapyyesPage,
    DevelopmentPage,
    Ending2Page,
    Development2Page,
    ShoutPage,
    ColinPage,
    LsdPage,
    LsdnoPage,
    JumpsPage,
    JumpcPage,
    HynesPage,
    DetailsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroductionPage,
    SelectionPage,
    BandersnatchPage,
    BPage1Page,
    Now2Page,
    ThompsonPage,
    AcceptPage,
    RefusePage,
    IgnorePage,
    TherapyPage,
    TherapynoPage,
    TherapyyesPage,
    DevelopmentPage,
    Ending2Page,
    Development2Page,
    ShoutPage,
    ColinPage,
    LsdPage,
    LsdnoPage,
    JumpsPage,
    JumpcPage,
    HynesPage,
    DetailsPage

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DetailsProvider
  ]
})
export class AppModule {}