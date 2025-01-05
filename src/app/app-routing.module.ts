import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { GestionHotelComponent } from './gestion-hotel/gestion-hotel.component';
import { FinanceReportComponent } from './finance-report/finance-report.component';
import {OfferComponent} from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sectionhotels', component: SectionhotelsComponent },
  { path: 'gestion-reservation', component: GestionReservationComponent },
  { path: 'gestion-hotel', component: GestionHotelComponent },
  { path: 'finance-report', component: FinanceReportComponent }, { path: 'offer', component: OfferComponent},
  { path: 'payment', component: PaymentComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
