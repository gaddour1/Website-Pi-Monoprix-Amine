import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountInformationComponent } from './amount-information.component';

describe('AmountInformationComponent', () => {
  let component: AmountInformationComponent;
  let fixture: ComponentFixture<AmountInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
