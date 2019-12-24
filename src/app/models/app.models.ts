export interface CREATUSER {
    userName: string;
    phoneNumber: number;
    dateOfBirth: string;
    emailId: string;
    address: string;
    companyName: string;
    salary: number;
    password: string;
}

export interface SUCCESSRESPONSE {
    message: string;
    statusCode: number;
}

export interface TRANSACTIONDETAILS {

    message: string;
    statusCode: number;
    card: CREDITCARD;
    transactions: TRANSACTIONLIST[];

}

export interface TRANSACTIONLIST {
    transactionNo: number;
    transactionDate: string;
    transactionAmount: string;
    remarks: string;
}

export interface CREDITCARD {
    cardNumber: number;
    holderName: string;
    validFrom: string;
    validTo: string;
    cvv: number;
}


export interface PRODUCTLISTRESPONSE {

    message: string;
    statusCode: number;
    products: PRODUCTLIST[];

}
export interface PRODUCTLIST {
    productId: number;
    productName: string;
    priceValue: string;
    productSpecification: string;
    quantityAvailable: number;
    imageUrl: string;
}

export interface BUYPRODUCT {
    cardNumber: string;
    holderName: string;
    cvv: number;
    validFrom: string;
    validTo: string;
    productId: number;
}

export interface USERREQUEST {
    userId: string;
    password: string;
}

export interface USERRESPONSE {
    message: string;
    statusCode: number;
    userId: string;
    userName: string;
    emailId: string;
    loginType: string;
}

export interface ORDERRESPONSE {
    message: string;
    statusCode: number;
    orders: ORDERLIST[];
}

export interface ORDERLIST {
    orderId: number;
    orderDate: string;
    orderAmount: string;
    remarks: string;
}

/* success response model */
export interface SuccessResponse {
    statusCode: number;
    status: string;
    message: string;
}

