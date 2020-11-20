import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bTransComponent } from './b2b-trans.component';

describe('B2bTransComponent', () => {
  let component: B2bTransComponent;
  let fixture: ComponentFixture<B2bTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
