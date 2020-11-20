import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2wTransComponent } from './w2w-trans.component';

describe('W2wTransComponent', () => {
  let component: W2wTransComponent;
  let fixture: ComponentFixture<W2wTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2wTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2wTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
