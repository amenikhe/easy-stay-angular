import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-hotel',
  templateUrl: './gestion-hotel.component.html',
  styleUrls: ['./gestion-hotel.component.css']
})
export class GestionHotelComponent {
  hotels: any[] = []; // Liste des hôtels
  showAddPopup: boolean = false; // État pour le formulaire d'ajout
  showConfirmationPopup: boolean = false; // Pop-up de confirmation pour la suppression
  newHotelForm: FormGroup;
  currentHotelToDelete: any; // Stockage temporaire de l'hôtel à supprimer

  constructor(private fb: FormBuilder) {
    this.newHotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      service: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    // Charger les hôtels depuis localStorage
    this.loadHotels();
  }

  // Ouvrir le formulaire d'ajout
  openAddForm() {
    this.showAddPopup = true;
  }

  // Fermer le formulaire d'ajout
  closeAddForm() {
    this.showAddPopup = false;
    this.resetNewHotel();
  }

  // Ajouter un nouvel hôtel
  addHotel() {
    if (this.newHotelForm.valid) {
      this.hotels.push(this.newHotelForm.value);
      this.saveToLocalStorage();
      this.closeAddForm();
    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  // Réinitialiser le formulaire
  resetNewHotel() {
    this.newHotelForm.reset();
  }

  // Confirmer la suppression
  confirmDelete(hotel: any) {
    this.showConfirmationPopup = true;
    this.currentHotelToDelete = hotel; // Stocker l'hôtel à supprimer
  }

  // Fermer le pop-up de confirmation
  closePopup() {
    this.showConfirmationPopup = false;
  }

  // Supprimer un hôtel
  deleteHotel() {
    const index = this.hotels.findIndex(hotel => hotel === this.currentHotelToDelete);
    if (index !== -1) {
      this.hotels.splice(index, 1);
      this.saveToLocalStorage(); // Sauvegarde après suppression
      this.closePopup();
    }
  }

  // Charger les hôtels depuis localStorage
  loadHotels() {
    const storedHotels = localStorage.getItem('hotels');
    if (storedHotels) {
      this.hotels = JSON.parse(storedHotels);
    }
  }

  // Sauvegarder les hôtels dans localStorage
  saveToLocalStorage() {
    localStorage.setItem('hotels', JSON.stringify(this.hotels));
  }
}
