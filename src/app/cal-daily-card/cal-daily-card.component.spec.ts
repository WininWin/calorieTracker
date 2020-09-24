import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDailyCardComponent } from './cal-daily-card.component';

describe('CalDailyCardComponent', () => {
  let component: CalDailyCardComponent;
  let fixture: ComponentFixture<CalDailyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDailyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
