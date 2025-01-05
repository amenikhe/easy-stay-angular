import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  hotels = [
    {
      name: "EL-mouradi",
      location: "Hammamet",
      price: 380,
      img: "assets/hotels/ELmouradi.jpg",
      services: ["Pool-free", "Free breakfast and dinner"],
      rating: 5,
      description: "2 adults"
    },
    {
      name: "Hotel Monara",
      location: "Tunis, Hammamet",
      price: 190,
      img: "assets/hotels/monara.jpg",
      services: [ "Free breakfast", "Pool-free", "Free Wi-Fi"],
      rating: 4.0,
      description: "2 adults with baby"
    },
    {
      name: "Mirage",
      location: "Hammamet",
      price: 200,
      img: "assets/hotels/Mirage.jpg",
      services: [ "Pool-free", "Fitness Center-free" , "Free breakfast"],
      rating: 4.7,
      description: "3 adults"
    },
    {
      name: "Royal jinene",
      location: "Sousse",
      price: 90,
      img: "assets/hotels/royal.jpg",
      services: [ "Pool-free", "Fitness Center-free" , "Free breakfast"],
      rating: 4.5,
      description: "2 adults"
    },
    {
      name: "Rosa Beach",
      location: "Monastir",
      price: 214,
      img: "assets/hotels/rosabeach.jpg",
      services: [ "Pool-free", "Fitness Center-free" , "Free breakfast"],
      rating: 4.5,
      description: "2 adults"
    }



  ];

  filterLocation: string = '';
  filterMaxPrice: number = 1000;

  reservationForm: FormGroup;
  isReservationFormVisible: boolean = false;
  paymentLink = 'https://buy.stripe.com/test_aEU28Q2dw4UuaIgfYZ'; // Votre lien de paiement
  router: any;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guests: ['', [Validators.required, Validators.min(1)]],
      roomType: ['', Validators.required],
      requests: ['']
    });
  }

  // Scroll left (vers la gauche)
  scrollLeft() {
    const container = document.querySelector('.hotel-cards');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  // Scroll right (vers la droite)
  scrollRight() {
    const container = document.querySelector('.hotel-cards');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  // Méthode pour afficher le formulaire de réservation
  showReservationForm(hotel: any) {
    this.isReservationFormVisible = true;
  }
  goToPayment() {
    this.router.navigate(['/payment']);
  }
  // Méthode pour masquer le formulaire
  closeReservationForm() {
    this.isReservationFormVisible = false;
  }

  // Méthode de soumission du formulaire
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Reservation details:', this.reservationForm.value);
  
      // Redirection vers le paiement Stripe
      window.location.href = this.paymentLink;
    }
  }
  
  closePaymentView() {
    this.isReservationFormVisible = false;
  }
  // Méthode pour obtenir les étoiles en fonction de la note de l'hôtel
  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
    const halfStar = (rating - fullStars) >= 0.5; // Si la note est à moitié étoile

    console.log(`Rating: ${rating}, Full Stars: ${fullStars}, Half Star: ${halfStar}`);

    // Remplir les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push('filled');
    }

    // Ajouter une étoile demi si nécessaire
    if (halfStar) {
      stars.push('half');
    }

    // Compléter avec des étoiles vides
    for (let i = stars.length; i < 5; i++) {
      stars.push('empty');
    }

    return stars;
  }


  // Filtrage des hôtels
  getFilteredHotels() {
    return this.hotels.filter(hotel =>
      (this.filterLocation ? hotel.location.toLowerCase().includes(this.filterLocation.toLowerCase()) : true) &&
      hotel.price <= this.filterMaxPrice
    );
  }

  // Méthodes d'accès aux contrôles du formulaire
  get name() { return this.reservationForm.get('name'); }
  get email() { return this.reservationForm.get('email'); }
  get checkIn() { return this.reservationForm.get('checkIn'); }
  get checkOut() { return this.reservationForm.get('checkOut'); }
  get guests() { return this.reservationForm.get('guests'); }
  get roomType() { return this.reservationForm.get('roomType'); }
  get requests() { return this.reservationForm.get('requests'); }
}

