import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { DatePipe } from '@angular/common';

import { HttpService } from '../../../shared/services/http.service';
import { CommunicationService } from '../../../shared/services/communication.service';
import { ENDPOINTS } from '../../../shared/services/end-points.enum';
import { PRODUCTLIST, PRODUCTLISTRESPONSE } from '../../../models/app.models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  productList;
  product: string;
  constructor(private http: HttpService,
    private router: Router,
    private passdata: CommunicationService) { }

  ngOnInit() {
    this.getProductList('all');
  }

  /* Get policy list */
  getProductList(params: string) {
    const endpoint = `${ENDPOINTS.PRODUCTS}?searchValue=${params}`;
    this.http.megareadData(endpoint).subscribe(
      (res) => {
        this.productList = res;
      }
    );
  }


  /* filter data based on selected month and year */
  searchProduct(formValue: string) {
    let params = formValue;
    if (params === '') {
      params = 'all';
    }
    this.getProductList(params);
  }

}
