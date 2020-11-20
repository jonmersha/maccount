import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2bTransComponent } from './w2b-trans.component';

describe('W2bTransComponent', () => {
  let component: W2bTransComponent;
  let fixture: ComponentFixture<W2bTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2bTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2bTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
