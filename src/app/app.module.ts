import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { FinanceReportComponent } from './finance-report/finance-report.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { GestionHotelComponent } from './gestion-hotel/gestion-hotel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionhotelsComponent,
    FooterComponent,
    OfferComponent,
    HeaderComponent,
    PaymentComponent,
    FinanceReportComponent,
    GestionReservationComponent,
    GestionHotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
