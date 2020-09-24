import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CalDailyCardComponent } from './cal-daily-card/cal-daily-card.component';
import { CalDailyChartComponent } from './cal-daily-chart/cal-daily-chart.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CalDailyCardComponent,
    CalDailyChartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
