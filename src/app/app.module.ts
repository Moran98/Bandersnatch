import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';
import { FormsModule } from '@angular/forms';
import { Slides } from 'ionic-angular';

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
import { ResistancePage } from '../pages/resistance/resistance';
import { Ending4Page } from '../pages/ending4/ending4';
import { DeadlinePage } from '../pages/deadline/deadline';
import { SleepPage } from '../pages/sleep/sleep';
import { BookPage } from '../pages/book/book';
import { PacPage } from '../pages/pac/pac';
import { PaxPage } from '../pages/pax/pax';
import { Ending5Page } from '../pages/ending5/ending5';
import { MorningPage } from '../pages/morning/morning';
import { MeltdownPage } from '../pages/meltdown/meltdown';
import { KillPage } from '../pages/kill/kill';
import { ChopPage } from '../pages/chop/chop';
import { BuryPage } from '../pages/bury/bury';
import { BackoffPage } from '../pages/backoff/backoff';
import { ToyPage } from '../pages/toy/toy';
import { Therapy2Page } from '../pages/therapy2/therapy2';
import { DeathPage } from '../pages/death/death';
import { Therapy3Page } from '../pages/therapy3/therapy3';
import { AboutPage } from '../pages/about/about';


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
    AboutPage,
    AcceptPage,
    RefusePage,
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
    DetailsPage,
    ResistancePage,
    Ending4Page,
    DeadlinePage,
    SleepPage,
    BookPage,
    PacPage,
    PaxPage,
    Ending5Page,
    MorningPage,
    MeltdownPage,
    KillPage,
    ChopPage,
    BuryPage,
    BackoffPage,
    ToyPage,
    Therapy2Page,
    Therapy3Page,
    DeathPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule
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
    DetailsPage,
    ResistancePage,
    Ending4Page,
    DeadlinePage,
    SleepPage,
    BookPage,
    PacPage,
    PaxPage,
    Ending5Page,
    MorningPage,
    MeltdownPage,
    KillPage,
    ChopPage,
    BuryPage,
    BackoffPage,
    ToyPage,
    AboutPage,
    Therapy2Page,
    DeathPage,
    Therapy3Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DetailsProvider,
   // Vibration
  ]
})
export class AppModule {}