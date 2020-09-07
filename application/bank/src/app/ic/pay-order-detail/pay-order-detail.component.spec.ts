import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOrderDetailComponent } from './pay-order-detail.component';

describe('PayOrderDetailComponent', () => {
  let component: PayOrderDetailComponent;
  let fixture: ComponentFixture<PayOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
