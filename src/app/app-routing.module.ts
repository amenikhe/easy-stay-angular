import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import {OfferComponent} from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
import { FinanceReportComponent } from './finance-report/finance-report.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', component: SectionhotelsComponent },
  { path: 'offer', component: OfferComponent},
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/finance-report', pathMatch: 'full' }, // Redirection vers le rapport financier par défaut
  { path: 'finance-report', component: FinanceReportComponent },
  { path: '', redirectTo: '/finance-report', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
