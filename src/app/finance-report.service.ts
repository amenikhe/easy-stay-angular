// src/app/finance-report.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceReportService {

  constructor() { }

  getFinancialReport() {
    // Simuler des données financières pour l'instant
    return [
      { month: 'Janvier', revenue: 5000, expenses: 2000, profit: 3000 },
      { month: 'Février', revenue: 6000, expenses: 2500, profit: 3500 },
      { month: 'Mars', revenue: 7000, expenses: 3000, profit: 4000 },
      // Ajouter plus de mois ou d'autres données ici
    ];
  }
}
