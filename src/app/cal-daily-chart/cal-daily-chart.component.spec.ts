import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDailyChartComponent } from './cal-daily-chart.component';

describe('CalDailyChartComponent', () => {
  let component: CalDailyChartComponent;
  let fixture: ComponentFixture<CalDailyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDailyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDailyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
