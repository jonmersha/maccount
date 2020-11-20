import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2wTransComponent } from './b2w-trans.component';

describe('B2wTransComponent', () => {
  let component: B2wTransComponent;
  let fixture: ComponentFixture<B2wTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2wTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2wTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
