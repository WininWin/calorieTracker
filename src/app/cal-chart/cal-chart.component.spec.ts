import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalChartComponent } from './cal-chart.component';

describe('CalChartComponent', () => {
  let component: CalChartComponent;
  let fixture: ComponentFixture<CalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
