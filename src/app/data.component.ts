import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
})
export class DataComponent implements OnInit {
    accountName: any = '-';
    type: any = '-';
    accountNum: string = 'default';
    number: any = '-';
    recnumber: string;
    balance: number;
    transAmount: number;
    rectype: string;
    oldNumber: string;
    oldType: string;
    regDTM: any = '-';
    loginDTM: any;
    customerID: any;
    recAcNum: string;
    note: any;
    recName:any;
    ByAc:any = 0;
    ByPrompt: any =0;
    accounts = [];


    constructor(private router: Router) { }


    ngOnInit(): void {
        
    }

    formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return ([year, month, day].join('-'))+" "+time;
    }

    returnNumber() {
        let a = this.number;
        return a;
    }

}