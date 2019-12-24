import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { ENDPOINTS } from '../../../shared/services/end-points.enum';
import { CREDITCARD, TRANSACTIONDETAILS, TRANSACTIONLIST } from '../../../models/app.models';

@Component({
  selector: 'app-card-transactions',
  templateUrl: './card-transactions.component.html',
  styleUrls: ['./card-transactions.component.css']
})
export class CardTransactionsComponent implements OnInit {
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();
  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  years: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  montholyRespose;
  constructor(private http: HttpService) { }

  ngOnInit() {
    const formvalue = {
      month: +new Date().getMonth(),
      year: +new Date().getFullYear()
    };
    this.filterTransaction(formvalue);
  }

  /* filter data based on selected month and year */
  filterTransaction(formValue) {
    const filterobj = {
      month: +formValue.month + 1,
      year: formValue.year
    };
    const userid = JSON.parse(sessionStorage.getItem('user')).userId;
    const endpoints = ENDPOINTS.TRANSACTIONS + '/' + userid + '?month=' + filterobj.month + '&year=' + filterobj.year;
    this.http.readData(endpoints).subscribe(
      (res: any) => {
        this.montholyRespose = res;
      }
    );
  }
}
