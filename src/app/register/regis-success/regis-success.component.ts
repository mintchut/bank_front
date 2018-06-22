import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../../data.component';

@Component({
    selector: 'regis-success',
    templateUrl: 'regis-success.component.html',
    styleUrls: ['regis-success.component.scss']
})
export class RegisSuccessComponent {
    RegisterDTM: string;
    type: string;
    num: string;
    name: string;
    account: string;

    constructor(private router: Router, public _var: DataComponent) { }


    clickBack() {
        this.router.navigate(['/menu'])
    }

    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.num = this._var.number;
        this.type = this._var.type;
        this.RegisterDTM = this._var.regDTM;
    }

}
