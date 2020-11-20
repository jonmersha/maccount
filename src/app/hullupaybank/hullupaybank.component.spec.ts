import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HullupaybankComponent } from './hullupaybank.component';

describe('HullupaybankComponent', () => {
  let component: HullupaybankComponent;
  let fixture: ComponentFixture<HullupaybankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HullupaybankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HullupaybankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
