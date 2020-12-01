import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './gards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';

import { PaymentComponent } from './payment/payment.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { TransferComponent } from './transfer/transfer.component';
import { TopupComponent } from './topup/topup.component';
import { B2bTransComponent } from './b2b-trans/b2b-trans.component';
import { B2wTransComponent } from './b2w-trans/b2w-trans.component';
import { W2wTransComponent } from './w2w-trans/w2w-trans.component';
import { W2bTransComponent } from './w2b-trans/w2b-trans.component';
//import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { WalletbalanceComponent } from './walletbalance/walletbalance.component';
import { CashdepositComponent } from './cashdeposit/cashdeposit.component';
import { CashwithdrawComponent } from './cashwithdraw/cashwithdraw.component';
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
import { NoncustomerComponent } from './noncustomer/noncustomer.component';
//import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'', component: LoginComponent},
  {path: 'cash-flow', component:CashFlowComponent, canActivate:[AuthGuard]},
  {path: 'payment', component:PaymentComponent, canActivate:[AuthGuard]},
  {path: 'transfer', component:TransferComponent, canActivate:[AuthGuard]},
  {path: 'topup', component:TopupComponent, canActivate:[AuthGuard]},
  {path: 'b2b-trans', component:B2bTransComponent, canActivate:[AuthGuard]},
  {path: 'b2w-trans', component:B2wTransComponent, canActivate:[AuthGuard]},
  {path: 'w2w-trans', component:W2wTransComponent, canActivate:[AuthGuard]},
  {path: 'w2b-trans', component:W2bTransComponent, canActivate:[AuthGuard]},
  //{path: 'bankbalance', component:BankbalanceComponent, canActivate:[AuthGuard]},
  {path: 'walletbalance', component:WalletbalanceComponent, canActivate:[AuthGuard]},
  {path: 'cashdeposit', component:CashdepositComponent, canActivate:[AuthGuard]},
  {path: 'cashwithdraw', component:CashwithdrawComponent, canActivate:[AuthGuard]},
  {path: 'electric', component:ElectricComponent, canActivate:[AuthGuard]},
  {path: 'dstv', component:DstvComponent, canActivate:[AuthGuard]},
  {path: 'water', component:WaterComponent, canActivate:[AuthGuard]},
  {path: 'traficpayment', component:TrafficpaymentComponent, canActivate:[AuthGuard]},
  {path: 'schoolfee', component:SchoolfeeComponent, canActivate:[AuthGuard]},
  {path: 'airlinesticket', component:ArilinesticketComponent, canActivate:[AuthGuard]},
  {path: 'supermarket', component:SupermarketComponent, canActivate:[AuthGuard]},
  {path: 'shops', component:ShopsComponent, canActivate:[AuthGuard]},
  {path: 'recharge', component:RechargeComponent, canActivate:[AuthGuard]},
  {path: 'forgetpassword', component:ForgetpasswordComponent, canActivate:[AuthGuard]},
  {path: 'noncustomer', component:NoncustomerComponent, canActivate:[AuthGuard]},

  // { path: '', redirectTo: 'en', pathMatch: 'full' },
  // { data: { source: "en.json" },}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
