import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPayOrderComponent } from './search-pay-order.component';

describe('SearchPayOrderComponent', () => {
  let component: SearchPayOrderComponent;
  let fixture: ComponentFixture<SearchPayOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPayOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
