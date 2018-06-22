import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../data.component';
import { AppService } from '../service/app.service';
import { Response } from '@angular/http'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'transfer',
    templateUrl: 'transfer.component.html',
    styleUrls: ['transfer.component.scss']
})
export class TransferComponent {
    note: any;
    constructor(private router: Router, 
        public _var: DataComponent,
    public appService : AppService) { }

    recnum: string;
    type: string;
    num: string;
    name: string;
    account: string;
    transAmount: number;
    data:any;
    path : string;
    PromptPayData : any;


    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.type = this._var.type;
    }




    clickNext() {

        if (confirm('Confirm to transfer?')) {
            if(this.transAmount <= 0){
                alert("Amount is invalid")
            }
            
            else if(this.recnum == undefined||this.type == undefined||this.transAmount == undefined){
                 alert("Please fill in all information");
            }
    
            else{
            this._var.transAmount = this.transAmount;
            this._var.recnumber = this.recnum;
            this._var.rectype = this.type;
            this._var.note = this.note;
            this.path = "http://192.168.9.154:8090/interbank/any-id/?type="+this.type+"&value="+ this.recnum;
            this.appService.getPromptPayData(this.path).then(
                (response: Response) => {
                    console.log("RecNum"+response.json().AccountID,);
                    
                    this.data ={
                            "AIPID":response.json().AIPID,
                            "SendBankCode":"004",
                            "RecBankCode":response.json().BankCode,
                            "SendAccountID0":this._var.accountNum,
                            "Amount":this.transAmount,
                            "Type" : this.type,
                            "IDValue":response.json().IDValue,
                            "AccountId":response.json().AccountID,
                            "Note": this.note
                            }
                            console.log(this.data);
                            

                        if(this.transAmount<=this._var.balance)
                            {
                                this.callPostService();
                            }
    
                        else if(this.transAmount>this._var.balance){
                          alert("You don't have enough money to transfer")
                          }

                         }
                
            ).catch(
                (error: HttpErrorResponse) => {
                    console.log(error);
                }
                
            )}
        } else {
            // Do nothing!
        }
        

        
    }

    callPostService() {
        this.appService.transPrompt(this.data).then(
            (response: Response) => {
                this._var.ByPrompt=1;
                this._var.ByAc=0;
                this.router.navigate(['/transSuccess']);
                }
                
            ).catch(
                (error: HttpErrorResponse) => {
                    console.log(error);
                    alert("Transfer Fail");
                }
                
            )}
                    
                



    clickBack() {
        this.router.navigate(['/menu']);
    }

}
