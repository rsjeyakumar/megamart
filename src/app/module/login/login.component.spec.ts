import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../../shared/services/http.service';
import { CommunicationService } from '../../shared/services/communication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';


describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedModule, RouterTestingModule],
      providers: [HttpService, CommunicationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the login to registratrion form', () => {
    component.toggleLoginReg = true;
    const toggleForm = component.toggleForm();
    expect(toggleForm).toBe(false);
  });

  it('should toggle the registratrion to login form', () => {
    component.toggleLoginReg = false;
    const toggleForm = component.toggleForm();
    expect(toggleForm).toBe(true);
  });

  it('should validate number', () => {
    component.toggleLoginReg = false;
    const toggleForm = component.toggleForm();
    expect(toggleForm).toBe(true);
  });

});
