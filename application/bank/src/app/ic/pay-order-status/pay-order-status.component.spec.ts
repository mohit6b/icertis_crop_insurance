import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOrderStatusComponent } from './pay-order-status.component';

describe('PayOrderStatusComponent', () => {
  let component: PayOrderStatusComponent;
  let fixture: ComponentFixture<PayOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
