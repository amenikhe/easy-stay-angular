import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  cardElement: any;

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51QdJ0n2V0mrNvTk6pI3A71bWqA41uYBqW87hHyNTL5th78YPZGKwOdvDxfv7uvFEjFVjsfh8R6isziRf3oNUEFIh0063W5dFdG');

    const elements = this.stripe.elements();
    this.cardElement = elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async handlePayment(event: Event) {
    event.preventDefault();

    const { paymentMethod, error } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
    });

    if (error) {
      console.error('Erreur de paiement :', error);
    } else {
      console.log('Méthode de paiement créée :', paymentMethod);
      // Vous pouvez ensuite envoyer le paymentMethod.id à votre back-end
    }
  }
}
