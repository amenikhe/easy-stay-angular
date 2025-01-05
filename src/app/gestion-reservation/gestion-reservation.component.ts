import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.css']
})
export class GestionReservationComponent {
  reservations: any[] = []; //liste des reservations
   showAddPopup: boolean = false;
   showConfirmationPopup: boolean = false;
   newReservationForm: FormGroup;
   currentHotelToDelete: any;

   constructor(private fb: FormBuilder) {
    this.newReservationForm = this.fb.group({
      name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      datedebut: ['', [Validators.required, Validators.min(1)]],
      datefin: ['', Validators.required],
      numberPerson: ['', [Validators.required, Validators.min(1), Validators.max(4)]],
      roomtyp: ['', Validators.required],
    });
  
     // Charger les reservations depuis localStorage
     this.loadreservations();
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
     if (this.newReservationForm.valid) {
       this.reservations.push(this.newReservationForm.value);
       this.saveToLocalStorage();
       this.closeAddForm();
     } else {
       alert('Veuillez remplir les champs obligatoires.');
     }
   }

   // Réinitialiser le formulaire
   resetNewHotel() {
     this.newReservationForm.reset();
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
     const index = this.reservations.findIndex(hotel => hotel === this.currentHotelToDelete);
     if (index !== -1) {
       this.reservations.splice(index, 1);
       this.saveToLocalStorage(); // Sauvegarde après suppression
       this.closePopup();
     }
   }

   // Charger les hôtels depuis localStorage
   loadreservations() {
     const storedreservations = localStorage.getItem('reservations');
     if (storedreservations) {
       this.reservations = JSON.parse(storedreservations);
     }
   }

   // Sauvegarder les hôtels dans localStorage
   saveToLocalStorage() {
     localStorage.setItem('reservations', JSON.stringify(this.reservations));
   }
 }
