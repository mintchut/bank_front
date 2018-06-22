import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../data.component';
import { AppService } from '../service/app.service';
import { Response } from '@angular/http'

@Component({
    selector: 'cancel',
    templateUrl: 'cancel.component.html',
    styleUrls: ['cancel.component.scss']
})
export class CancelComponent {

    type: string;
    num: string;
    name: string;
    account: string;
    data : any;
    save: any;
    path: string = 'http://localhost:8090/orcsoft/mint/kbank/delete/'+this._var.type+'/'+this._var.number;

    constructor(private router: Router,
        private appService : AppService,
         public _var: DataComponent) { }


    clickBack() {
        this.router.navigate(['/menu']);
    }

    clickNext() {
        if (confirm('Are you sure you want to disconnect this PromptPay account?')) {
            // Save it!
        this.callPostService(this.path);
        } else {
            // Do nothing!
        }
    }
    ngOnInit(): void {
        this._var.oldNumber = this._var.number;
        this._var.oldType = this._var.type;
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.num = this._var.number;
        this.type = this._var.type;
        this.data = {
            "IDType": this._var.type,
            "IDValue": this._var.number
         }
    }

    
    callPostService(a:string) {
        
        this.appService.cancel(a).then((response) => {
            const res = response.json();
            console.log("Cancel success");
            console.log(res);
        })
            this._var.type = "-";
            this._var.number = "-";
            this.router.navigate(['/cancelSuccess']);
                
    }


}
