import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../../data.component';
import { AppService } from '../../service/app.service';
import { Response } from '@angular/http'


@Component({
    selector: 'trans-local',
    templateUrl: 'trans-local.component.html',
    styleUrls: ['trans-local.component.scss']
})
export class TransferLocalComponent {
    note: any;
    constructor(private router: Router,
         public _var: DataComponent,
        public appService: AppService) { }

    recnum: string;
    type: string;
    recAcNum: string;
    name: string;
    account: string;
    transAmount: number;
    bankCode:String;
    data:any;


    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.type = this._var.type;
        this.bankCode = "004";
    }


    clickNext() {

        if (confirm('Confirm to transfer?')) {
            if(this.transAmount <= 0){
                alert("Amount is invalid")
            }
            
            else if(this.recAcNum == undefined||this.type == undefined||this.transAmount == undefined){
                 alert("Please fill in all information");
            }
    
            else{
    
            this._var.transAmount = this.transAmount;
            this._var.recAcNum = this.recAcNum;
            this._var.rectype = this.type;
            this._var.note = this.note;
            this.data = {
                "RecAccountID":this.recAcNum,
                "SendBankCode":this.bankCode,
                "SendAccountID":this._var.accountNum,
                "Amount":this.transAmount,
                "Note" : this.note
                }
                if(this.bankCode =="004"&&this.transAmount<=this._var.balance)
                {this.callPostService();}
    
                else if(this.transAmount>this._var.balance){
                    alert("You don't have enough money to transfer")
                }
                else{alert("Now you can transfer only in K-Bank")}
    
            }
        } else {
            // Do nothing!
        }
        

        
    }

    callPostService() {
        this.appService.transLocal(this.data).then(
            (response: Response) => {
                
                this._var.ByPrompt=0;
                this._var.ByAc=1;
                if (response.json().Response == "SUCCESS") {
                    this._var.recName = response.json().recName;
                    this._var.recAcNum = this.recAcNum;
                    this.router.navigate(['/transSuccess']);
                }

                else {
                    alert("Transfer FAIL")
                    
                }
            }
        )
    }


    clickBack() {
        this.router.navigate(['/menu']);
    }

}
