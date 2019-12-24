import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { HttpService } from '../../shared/services/http.service';
import { CommunicationService } from '../../shared/services/communication.service';
import { ENDPOINTS } from '../../shared/services/end-points.enum';
import { SUCCESSRESPONSE, USERREQUEST, USERRESPONSE, CREATUSER } from '../../models/app.models';

/* Prime ng message service */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatePipe]
})
export class LoginComponent implements OnInit {
  toggleLoginReg = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginvalidation = false;
  loginSpin: boolean;
  registerSpin: boolean;
  registerSuccessMsg = false;
  registerApiResponse: SUCCESSRESPONSE;
  phonePattern: RegExp = /^[7-9][0-9]{9}$/;
  loginType: string;

  constructor(
    private http: HttpService,
    private router: Router,
    private passdata: CommunicationService,
    private datePipe: DatePipe,
    private route: ActivatedRoute) { }

  ngOnInit() {
    /* Loginform creation */
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl('ecommerce', [Validators.required])
    });

    /* get login type */
    this.route.queryParams.subscribe(
      (res) => {
        this.loginType = res.type ? res.type : 'ecommerce';
      }
    );

    /* registration form creation */
    this.registerForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(this.phonePattern)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      salaryAmount: new FormControl(null, [Validators.required, this.validateNumber]),
      date: new FormControl(null, [Validators.required, this.validatedob]),
      password: new FormControl(null, [Validators.required])
    });
    // this.navigateUrl(JSON.parse(sessionStorage.getItem('user')));
  }


  /* toggle login form and registration form */

  toggleForm() {
    return this.toggleLoginReg = !this.toggleLoginReg;
  }


  /* Navigate page based on user login */
  navigateUrl(usesession) {
    if (usesession) {
      usesession.loginType !== 'CreditCard' ?
        this.router.navigate(['/products']) : this.router.navigate(['/transaction']);
    } else {
      this.router.navigate(['/products']);
    }
  }

  /* Login api submit */

  loginSubmit() {
    const queryparams = {
      userId: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.loginSpin = true;
    let httpcall;
    if (this.loginType === 'ecommerce') {
      httpcall = this.http.megacreateData(ENDPOINTS.LOGIN, queryparams);
    } else {
      httpcall = this.http.createData(ENDPOINTS.LOGIN, queryparams);
    }
    httpcall.subscribe(
      (res: SUCCESSRESPONSE) => {
        this.loginSpin = false;
        if (res.statusCode === 200) {
          const data = {
            userDetails: true
          };
          sessionStorage.clear();
          this.loginvalidation = false;
          sessionStorage.setItem('user', JSON.stringify(res));
          this.passdata.sendMessage(data);
          this.navigateUrl(res);
          //this.router.navigate(['/products']);
        } else {
          sessionStorage.clear();
          this.loginvalidation = true;
        }
      }
    );
  }
  /* Register api submit */
  registerFormSubmit() {
    this.registerSpin = true;
    const registerFormobj: CREATUSER = {
      userName: this.registerForm.value.userName,
      phoneNumber: Number(this.registerForm.value.phone),
      dateOfBirth: this.registerForm.value.date,
      emailId: this.registerForm.value.email,
      address: this.registerForm.value.address,
      companyName: this.registerForm.value.companyName,
      salary: Number(this.registerForm.value.salaryAmount),
      password: this.registerForm.value.password
    };

    this.http.createData(ENDPOINTS.USERS, registerFormobj).subscribe(
      (res: SUCCESSRESPONSE) => {
        this.registerSuccessMsg = true;
        this.registerSpin = false;
        this.registerForm.reset();
        if (res.statusCode === 201) {
          this.registerApiResponse = res;
        }
      }
    );
  }

  /* Reset Register form */
  resetRegiserform() {
    this.registerSpin = false;
    this.registerForm.reset();
  }


  /* validate dob is 18years above or not */
  validatedob(c: FormControl) {
    const today = new Date();
    const birthDate = new Date(c.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 ? null : {
      validatedob: {
        valid: false
      }
    };
  }

  /* Validate Number  */
  validateNumber(c: FormControl) {
    const numberExp: RegExp = /^[0-9]*$/;
    console.dir(c);
    return numberExp.test(c.value) ? null : {
      validateNumber: {
        valid: false
      }
    };

  }
}
