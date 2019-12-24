import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { CommunicationService } from '../../../shared/services/communication.service';
import { ENDPOINTS } from '../../../shared/services/end-points.enum';
import { BUYPRODUCT, SUCCESSRESPONSE, PRODUCTLIST } from '../../../models/app.models';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css'],
  providers: [DatePipe]
})
export class BuyProductsComponent implements OnInit {
  product: PRODUCTLIST;
  cardDetails: FormGroup;
  OTP: string;
  productId: number;
  showCard = true;
  mailId: string;
  buyproductResponse;
  constructor(
    private http: HttpService,
    private router: Router, private route: ActivatedRoute,
    private passdata: CommunicationService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.mailId = JSON.parse(sessionStorage.getItem('user')).emailId;
    this.route.params.subscribe(
      (res) => {
        this.productId = res.productid;
        console.log(this.productId);
      }
    );

    this.cardDetails = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required]),
      holderName: new FormControl(null, [Validators.required]),
      cvv: new FormControl(null, [Validators.required]),
      validTo: new FormControl(null, [Validators.required])
    });



    this.getProduct();
  }



  /* Get policy list */
  getProduct() {
    const endpoint = `${ENDPOINTS.PRODUCTS}/${this.productId}`;
    this.http.megareadData(endpoint).subscribe(
      (res: PRODUCTLIST) => {
        this.product = res;
      }
    );
  }

  /* Card deatils submit */
  cardSubmit() {
    this.showCard = false;
    const cardObj = {
      cardNumber: +this.cardDetails.value.cardNumber,
      holderName: this.cardDetails.value.holderName,
      cvv: +this.cardDetails.value.cvv,
      validTo: this.datePipe.transform(this.cardDetails.value.validTo, 'yyyy-MM-dd'),
      productId: +this.productId
    };
    const endpoint = `orders/${this.mailId}`;
    this.http.megacreateData(endpoint, cardObj).subscribe(
      (res: BUYPRODUCT) => {
        this.buyproductResponse = res;
      }
    );
  }

  /* OTP deatils submit */
  enterOtp() {
    console.log(this.OTP);
    const otpObj = {
      cardNumber: +this.cardDetails.value.cardNumber,
      otpValue: +this.OTP,
      userId: this.mailId
    };
    const endpoint = `orders/${this.buyproductResponse.orderId}`;
    this.http.megaupdateData(endpoint, otpObj).subscribe(
      (res: PRODUCTLIST) => {
        this.buyproductResponse = null;
        this.product = res;
        this.router.navigate(['/myorders']);
      }
    );
  }

}
