import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponent } from '../../data.component';

@Component({
    selector: 'cancel-success',
    templateUrl: 'cancel-success.component.html',
    styleUrls: ['cancel-success.component.scss']
})
export class CancelSuccessComponent {


    constructor(private router: Router, public _var: DataComponent) { }

    cancelDTM: string;
    type: string;
    num: string;
    name: string;
    account: string;


    ngOnInit(): void {
        this.account = this._var.accountNum;
        this.name = this._var.accountName;
        this.num = this._var.oldNumber;
        this.type = this._var.oldType;
        this.cancelDTM = this._var.formatDate();
    }




    clickBack() {
        this.router.navigate(['/menu'])
    }

}
