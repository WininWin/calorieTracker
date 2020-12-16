import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCardComponent } from './cal-card.component';

describe('CalCardComponent', () => {
  let component: CalCardComponent;
  let fixture: ComponentFixture<CalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
