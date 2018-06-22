import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { DataComponent } from '../data.component';


@Injectable()
export class AppService {
    transaction(a: any): any {
        return this.http.post(a,'').toPromise();
    }
    
    constructor(private http: Http, public _var: DataComponent) {}

    getInterBankData(a: string): any {
        return this.http.get(a).toPromise();
    }

    getPromptPayData(a: string): any {
        return this.http.get(a).toPromise();
    }

    basic(a: any): any {
        return this.http.post(a,'').toPromise();
    }

    login(data: any){
        return this.http
            .post('http://localhost:8090/orcsoft/mint/kbank/login',data).toPromise();
        
    }

    getData(data: any){
        return this.http
            .post('http://localhost:8090/orcsoft/mint/kbank/login',data).toPromise();
        
    }

    transLocal(data: any){
        return this.http
            .post('http://localhost:8090/orcsoft/mint/kbank/localtransfer',data).toPromise();
        
    }

    transPrompt(data: any){
        return this.http
            .post('http://localhost:8090/orcsoft/mint/kbank/intertransfer',data).toPromise();
        
    }

    register(data:any) {
        return this.http
            .post('http://localhost:8090/orcsoft/mint/kbank/register',data).toPromise();
    }


    cancel(a: string): any {
        return this.http.delete(a).toPromise();
    }
}