import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../../data.component';

@Component({
    selector: 'trans-success',
    templateUrl: 'trans-success.component.html',
    styleUrls: ['trans-success.component.scss']
})
export class TransSuccessComponent {
    note: any;

    constructor(private router: Router, public _var: DataComponent) { }
    transAmount: number;
    balanceAmount: number;
    recaccount: string;
    transDTM: any;
    type: string;
    num: string;
    name: string;
    account: string;
    recname: String;


    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.transDTM = this._var.formatDate();
        if(this._var.ByAc==1&&this._var.ByPrompt==0){
            this.recname = this._var.recName;
            this.recaccount = this._var.recAcNum;
        }
        else{
            this.recname = this._var.recnumber;
            this.recaccount = this._var.rectype;
        }
        
        this.transAmount = this._var.transAmount;
        this.balanceAmount = this._var.balance-this._var.transAmount;
        this.note = this._var.note;
    }




    clickBack() {
        this.router.navigate(['/menu'])
    }


}
