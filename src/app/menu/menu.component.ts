import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../data.component';
import { AppService } from '../service/app.service';
import { Response } from '@angular/http'


@Component({
    selector: 'menu1',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent {

    name: String;
    number: String;
    type: String;
    balance: number;
    accountNum: string;
    regDTM: string;
    pathToGet: string = 'http://localhost:8090/orcsoft/mint/kbank/basic/' + this._var.customerID;
    pathTransaction:string = 'http://localhost:8090/orcsoft/mint/kbank/transaction/' + this._var.accountNum;


    constructor(private router: Router,
        public _var: DataComponent,
        private appService: AppService, ) { }

    ngOnInit(): void {
        this.callBasicService();
        this.number = this._var.number;
        this.type = this._var.type;

    }

    callBasicService() {
        this.appService.basic(this.pathToGet).then(
            (response: Response) => {
                this._var.accountName = response.json().name;
                this._var.accountNum = response.json().accountID;
                this._var.balance = response.json().BalanceAmount;
                this.name = this._var.accountName;
                this.balance = this._var.balance;
                this.accountNum = this._var.accountNum;
            }
        )
    }

    callTransaction(){
        this.appService.transaction(this.pathTransaction).then(
            (response: Response) => {
                console.log(response.json());
            }
        )
    }

    onClick() {
        this.router.navigate(['/register'])
    }

    transferClick() {
        this.router.navigate(['/transferLocal'])
    }

    transferPromptClick() {
        this.router.navigate(['/transfer'])
    }

    logoutClick() {
        this.router.navigate(['/'])
    }

    cancelClick() {
        this.router.navigate(['/cancel'])
    }

}



