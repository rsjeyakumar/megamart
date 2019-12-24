import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../shared/services/http.service';
import { ENDPOINTS } from '../../../shared/services/end-points.enum';
import { ORDERLIST, ORDERRESPONSE } from '../../../models/app.models';



@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  myOrderList;
  userId: number;
  constructor(private http: HttpService) { }


  ngOnInit() {
    this.userId = JSON.parse(sessionStorage.getItem('user')).userId;
    // this.accountNumber = JSON.parse(sessionStorage.getItem('user')).accountNumber;
    // this.userName = JSON.parse(sessionStorage.getItem('user')).userName;
    // this.accountType = JSON.parse(sessionStorage.getItem('user')).accountType;
    this.viewMyOrders();
  }

  /* view my orders */
  viewMyOrders() {
    const endpoints = `${ENDPOINTS.MYORDERS}/${this.userId}`;
    this.http.megareadData(endpoints).subscribe(
      (res: ORDERRESPONSE) => {
        this.myOrderList = res;
      }
    );
  }

}
