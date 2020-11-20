import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArilinesticketComponent } from './arilinesticket.component';

describe('ArilinesticketComponent', () => {
  let component: ArilinesticketComponent;
  let fixture: ComponentFixture<ArilinesticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArilinesticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArilinesticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
