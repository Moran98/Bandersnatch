import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

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
    DevelopmentPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    DevelopmentPage

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}