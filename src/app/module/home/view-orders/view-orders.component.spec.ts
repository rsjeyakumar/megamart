import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { ViewOrdersComponent } from './view-orders.component';

import { of } from 'rxjs';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;

  beforeEach(async(() => {
    const user = {
      userId: 1,
      emailId: 'vishali@gmail.com',
      userName: 'Vishali',
      loginType: 'CreditCard'
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    TestBed.configureTestingModule({
      declarations: [ViewOrdersComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
