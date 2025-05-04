import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFinancialComponent } from './supplier-financial.component';

describe('SupplierFinancialComponent', () => {
  let component: SupplierFinancialComponent;
  let fixture: ComponentFixture<SupplierFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
