import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsComponent } from './buy-products.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BuyProductsComponent', () => {
  let component: BuyProductsComponent;
  let fixture: ComponentFixture<BuyProductsComponent>;

  beforeEach(async(() => {
    const user = {
      userId: 1,
      emailId: 'vishali@gmail.com',
      userName: 'Vishali',
      loginType: 'CreditCard'
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    TestBed.configureTestingModule({
      declarations: [BuyProductsComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
