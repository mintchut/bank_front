import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../data.component';
import { AppService } from '../service/app.service';
import { Response } from '@angular/http'
import { NgForm } from '@angular/forms';
import { isFunction } from 'util';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
    errorMessage: any;
    error: boolean;
    type: string;
    num: string;
    name: string;
    save:any;
    linkedNum: string;
    account: string;
    data:any;
    detail: {};
    constructor(private router: Router, 
                public _var: DataComponent,
                private appService : AppService) { }


    ngOnInit(): void {
        //CALL SERVICE
        
        console.log("Linked number : "+this.linkedNum);
        console.log("Type : "+this.type);
        this._var.regDTM = this._var.formatDate();
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
    }
    
    clickBack() {
        this.router.navigate(['/menu'])
    }

    clickNext() {

        if(this.linkedNum == undefined&&this.type == undefined){
            alert("Please select account type and fill in Linked number");
        }

        else if(this.linkedNum == undefined){
            alert("Please fill in Linked number");
        }

        else if(this.type == undefined){
            alert("Please select account type");
        }

        else {
        console.log("Linked number : "+this.linkedNum);
        console.log("Type : "+this.type);
        this._var.number = this.linkedNum;
        this._var.type = this.type;
            this.data = {
                    "IDType": this._var.type,
                    "IDValue": this._var.number,
                    "BankCode": "004",
                    "AccountId": "010-1-111111-1"
            }

        this.callPostService();

        }
    }
    
    
    callPostService() {
        this.appService.register(this.data).then(
            (response: Response) => {
                let data = response.json();
                console.log(response.json());
                if (response.json() == '200') {
                    this.save = data;
                    this.router.navigate(['/regisSuccess'])
                }

                else {
                    alert("This number has already existed")
                    
                }
            }
        )
    }





}