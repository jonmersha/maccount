import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncustomerComponent } from './noncustomer.component';

describe('NoncustomerComponent', () => {
  let component: NoncustomerComponent;
  let fixture: ComponentFixture<NoncustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoncustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
