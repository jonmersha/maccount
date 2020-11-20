import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from 'src/app/login/login.component';
import { TransferComponent } from './transfer/transfer.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { PaymentComponent } from './payment/payment.component';
import { TopupComponent } from './topup/topup.component';
import { W2wTransComponent } from './w2w-trans/w2w-trans.component';
import { W2bTransComponent } from './w2b-trans/w2b-trans.component';
import { B2wTransComponent } from './b2w-trans/b2w-trans.component';
import { B2bTransComponent } from './b2b-trans/b2b-trans.component';
import { HullupaybankComponent } from './hullupaybank/hullupaybank.component';
import { CashdepositComponent } from './cashdeposit/cashdeposit.component';
import { CashwithdrawComponent } from './cashwithdraw/cashwithdraw.component';
import { WalletbalanceComponent } from './walletbalance/walletbalance.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { ElectricComponent } from './electric/electric.component';
import { DstvComponent } from './dstv/dstv.component';
import { WaterComponent } from './water/water.component';
import { TrafficpaymentComponent } from './trafficpayment/trafficpayment.component';
import { SchoolfeeComponent } from './schoolfee/schoolfee.component';
import { ArilinesticketComponent } from './arilinesticket/arilinesticket.component';
import { ShopsComponent } from './shops/shops.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MainpageComponent } from './mainpage/mainpage.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TransferComponent,
    CashFlowComponent,
    PaymentComponent,
    TopupComponent,
    W2wTransComponent,
    W2bTransComponent,
    B2wTransComponent,
    B2bTransComponent,
    HullupaybankComponent,
    CashdepositComponent,
    CashwithdrawComponent,
    WalletbalanceComponent,
    BankbalanceComponent,
    SupermarketComponent,
    ElectricComponent,
    DstvComponent,
    WaterComponent,
    TrafficpaymentComponent,
    SchoolfeeComponent,
    ArilinesticketComponent,
    ShopsComponent,
    RechargeComponent,
    ForgetpasswordComponent,
    MainpageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


