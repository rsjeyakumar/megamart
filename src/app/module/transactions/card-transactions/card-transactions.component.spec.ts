import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../shared/shared.module';

import { CardTransactionsComponent } from './card-transactions.component';

describe('CardTransactionsComponent', () => {
  let component: CardTransactionsComponent;
  let fixture: ComponentFixture<CardTransactionsComponent>;

  beforeEach(async(() => {
    const user = {
      userId: 1,
      emailId: 'vishali@gmail.com',
      userName: 'Vishali',
      loginType: 'CreditCard'
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    TestBed.configureTestingModule({
      declarations: [CardTransactionsComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
