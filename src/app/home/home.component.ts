import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http'
import { AppService } from '../service/app.service';
import { DataComponent } from '../data.component';
import { DataService } from '../service/data.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

    save: any;
    res_name: any;
    data: any;
    constructor(private router: Router,
        private appService: AppService,
        public _var: DataComponent,
        private dataService: DataService) { }
    username: string
    password: string
    
    // pathToGet: string = 'http://localhost:8090/orcsoft/mint/kbank/getPromptPay/mobile/0870285500';
    pathToGet: string = 'http://localhost:8090/orcsoft/mint/kbank/getPromptPay/mobile/0870285500';
    detail: {}



    ngOnInit(): void {
        //service
        
    }

    

    onClick() {
        this._var.loginDTM = this._var.formatDate();
        this.data = {
            "username": this.username,
            "password": this.password
    }
        this.callLoginService();
    }

    callLoginService() {
        this.appService.login(this.data).then(
            (response: Response) => {
                console.log(response.json().Response);
                if (response.json().Response == "FAIL") {
                    alert("Invalid Username or Password")
                }

                else {
                    this._var.accountName = response.json().name;
                    this._var.accountNum = response.json().accountID;
                    this._var.balance = response.json().BalanceAmount;
                    this._var.customerID = response.json().customerID;
                    this.router.navigate(['/menu'])
                    
                }
            }
        )
    }


}

