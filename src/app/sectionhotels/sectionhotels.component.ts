import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from '@angular/router';
@Component({
  selector: 'app-sectionhotels',
  templateUrl: './sectionhotels.component.html',
  styleUrls: ['./sectionhotels.component.css']
})
export class SectionhotelsComponent {
   hotels = [
    {
      name: "Hasdrubal Thalassa ",
      location: "Tunis, Yasmine Hammamet",
      price: 708,
      img: "assets/hotels/hasdrubal.jpg",
      services: ["Spa", "Private beach", "Pool", "Fitness Center"],
      rating: 4.5,
      description: "Luxury spa hotel offering a variety of treatments and a relaxing atmosphere."
    },
    {
      name: "Hotel Monara",
      location: "Tunis, Hammamet",
      price: 90,
      img: "assets/hotels/monara.jpg",
      services: ["Ocean view", "Restaurant", "Pool", "Free Wi-Fi"],
      rating: 4.0,
      description: "Beautiful resort with an amazing ocean view, perfect for family vacations and relaxation."
    },
    {
      name: "Palace Hotel ",
      location: "Tunis, Sousse",
      price: 100,
      img: "assets/hotels/palace.jpg",
      services: ["Mountain view", "Hiking trails", "Free breakfast"],
      rating: 4.7,
      description: "A peaceful retreat nestled in the mountains, ideal for nature lovers, with scenic trails ."
    },
    {
      name: "Hotel Royal Jinene",
      location: "Tunis, Sousse",
      price: 100,
      img: "assets/hotels/royal.jpg",
      services: ["Mountain view", "Hiking trails", "Free breakfast"],
      rating: 4.7,
      description: "A luxurious mountain getaway offering amazing views, perfect for a relaxing retreat with hiking."
    },
    {
      name: "Radisson Blu Palace",
      location: "Tunis, Djerba",
      price: 120,
      img: "assets/hotels/Radisson.jpg",
      services: ["Private beach", "Pool", "Restaurant", "Spa"],
      rating: 4.8,
      description: "A luxurious beachfront hotel with a private beach and spa, perfect for a relaxing holiday in Djerba."
    },
    {
      name: "Sendido Djerba Beach",
      location: "Tunis, Djerba",
      price: 115,
      img: "assets/hotels/sendido.jpg",
      services: ["Beachfront", "Pool", "Free Wi-Fi", "Restaurant"],
      rating: 4.6,
      description: "A charming beachfront resort offering stunning views , with excellent amenities."
    },
    {
      name: "El Mouradi Hammamet",
      location: "Tunis, Hammamet",
      price: 120,
      img: "assets/hotels/ELmouradi.jpg",
      services: ["Beachfront", "Pool", "Free Wi-Fi", "Restaurant", "Spa"],
      rating: 4.3,
      description: "A luxurious beachfront resort with modern amenities, ideal for relaxation and leisure."
    },
    {
      name: "Le Royal",
      location: "Tunis, La Marsa",
      price: 150,
      img: "assets/hotels/royal.jpg",
      services: ["Beachfront", "Pool", "Free Wi-Fi", "Restaurant", "Fitness Center"],
      rating: 4.7,
      description: "A prestigious hotel offering elegance and comfort with beautiful sea views and exclusive services."
    },
    {
      name: "Mirage",
      location: "Tunis, Sousse",
      price: 100,
      img: "assets/hotels/Mirage.jpg",
      services: ["Beachfront", "Pool", "Free Wi-Fi", "Restaurant", "Bar"],
      rating: 4.2,
      description: "A charming hotel with a relaxing atmosphere, perfect for a family vacation by the beach."
    },
    {
      name: "Rosa Beach",
      location: "Tunis, Monastir",
      price: 110,
      img: "assets/hotels/rosabeach.jpg",
      services: ["Beachfront", "Pool", "Free Wi-Fi", "Restaurant", "Spa"],
      rating: 4.5,
      description: "A beautiful beachfront resort offering modern rooms and excellent services for a memorable stay."
    }
  ];

  filterLocation: string = '';
  filterMaxPrice: number = 1000;

  reservationForm: FormGroup;
  isReservationFormVisible: boolean = false;
  paymentLink = 'https://buy.stripe.com/test_6oE6p6aK22Mm2bKbII'; // Votre lien de paiement
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
