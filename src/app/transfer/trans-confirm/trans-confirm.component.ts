import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../../data.component';

@Component({
    selector: 'trans-confirm',
    templateUrl: 'trans-confirm.component.html',
    styleUrls: ['trans-confirm.component.scss']
})
export class TransConfirmComponent {

    transAmount: number;
    recnumber: string;
    constructor(private router: Router, public _var: DataComponent) { }
    rectype: string;
    num: string;
    name: string;
    account: string;
    recname: string;


    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.rectype = this._var.rectype;
        this.recname = "Hank Anderson";
        this.recnumber = this._var.recnumber;
        this.transAmount = this._var.transAmount;
    }




    clickBack() {
        this.router.navigate(['/transfer'])
    }

    clickNext() {
        //CALL SERVICE
        this._var.balance = this._var.balance - this.transAmount;

        this.router.navigate(['/transSuccess'])
    }



}
