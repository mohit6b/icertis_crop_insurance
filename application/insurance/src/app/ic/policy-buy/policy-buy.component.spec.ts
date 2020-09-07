import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyBuyComponent } from './policy-buy.component';

describe('PolicyBuyComponent', () => {
  let component: PolicyBuyComponent;
  let fixture: ComponentFixture<PolicyBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
