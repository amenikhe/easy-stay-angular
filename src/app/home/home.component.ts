import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  selectedPriceRange: string = '';
  selectedCategory: string = '';

  hotels = [
    {
      name: 'Hotel A',
      price: 250,
      category: 'luxury',
      images: ['assets/img/room-1.jpg', 'assets/img/room-2.jpg', 'assets/img/room-3.jpg']
    },
    {
      name: 'Hotel B',
      price: 180,
      category: 'budget',
      images: ['assets/img/room-1.jpg', 'assets/img/room-2.jpg', 'assets/img/room-3.jpg']
    },
    {
      name: 'Hotel C',
      price: 500,
      category: 'business',
      images: ['assets/img/room-1.jpg', 'assets/img/room-2.jpg', 'assets/img/room-3.jpg']
    }
    // Ajoutez plus d'hôtels ici
  ];

  filteredHotels = this.hotels;

  onSearchChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredHotels = this.hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesPrice = this.filterByPrice(hotel);
      const matchesCategory = this.filterByCategory(hotel);

      return matchesSearch && matchesPrice && matchesCategory;
    });
  }

  filterByPrice(hotel: any) {
    if (this.selectedPriceRange === 'low') {
      return hotel.price >= 100 && hotel.price <= 250;
    } else if (this.selectedPriceRange === 'medium') {
      return hotel.price > 250 && hotel.price <= 500;
    } else if (this.selectedPriceRange === 'high') {
      return hotel.price > 500;
    }
    return true;
  }

  filterByCategory(hotel: any) {
    if (this.selectedCategory) {
      return hotel.category === this.selectedCategory;
    }
    return true;
  }
}
