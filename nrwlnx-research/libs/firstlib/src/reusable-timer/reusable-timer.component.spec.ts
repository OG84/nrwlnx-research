import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTimerComponent } from './reusable-timer.component';

describe('ReusableTimerComponent', () => {
  let component: ReusableTimerComponent;
  let fixture: ComponentFixture<ReusableTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
