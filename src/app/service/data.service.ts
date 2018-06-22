import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    accountName: any;
    type: string = 'mobile';
    accountNum: string = '000-0-111111-0';
    number: string = '087-028-5500';
    recnumber: string;
    balance: number = 10000;
    transAmount: number;
    rectype: string;
    oldNumber: string;
    oldType: string;

}