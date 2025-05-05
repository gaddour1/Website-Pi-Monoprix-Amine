import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePredectionComponent } from './InvoicePredection.component';

describe('InvoicePredectionComponent', () => {
  let component: InvoicePredectionComponent;
  let fixture: ComponentFixture<InvoicePredectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePredectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicePredectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
