import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierClusteringComponent } from './supplier-clustering.component';

describe('SupplierClusteringComponent', () => {
  let component: SupplierClusteringComponent;
  let fixture: ComponentFixture<SupplierClusteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierClusteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
