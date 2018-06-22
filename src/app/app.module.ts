import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisSuccessComponent } from './register/regis-success/regis-success.component';
import { AppService } from './service/app.service';
import { HttpModule } from '@angular/http';
import { TransferComponent } from './transfer/transfer.component';
import { DataComponent } from './data.component';
import { TransSuccessComponent } from './transfer/trans-success/trans-success.component';
import { TransConfirmComponent } from './transfer/trans-confirm/trans-confirm.component';
import { CancelComponent } from './cancel/cancel.component';
import { CancelSuccessComponent } from './cancel/cancel-success/cancel-success.component';
import { DataService } from './service/data.service';
import { TestComponent } from './test/test.component';
import { TransferLocalComponent } from './transfer/trans-local/trans-local.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'regisSuccess', component: RegisSuccessComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'transferLocal', component: TransferLocalComponent },
  { path: 'transSuccess', component: TransSuccessComponent },
  { path: 'transConfirm', component: TransConfirmComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'cancelSuccess', component: CancelSuccessComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RegisterComponent,
    RegisSuccessComponent,
    HomeComponent,
    MenuComponent,
    TransferComponent,
    TransferLocalComponent,
    TransConfirmComponent,
    TransSuccessComponent,
    CancelComponent,
    CancelSuccessComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService, DataComponent, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }




