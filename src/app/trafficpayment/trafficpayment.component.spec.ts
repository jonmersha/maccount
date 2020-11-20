import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficpaymentComponent } from './trafficpayment.component';

describe('TrafficpaymentComponent', () => {
  let component: TrafficpaymentComponent;
  let fixture: ComponentFixture<TrafficpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
