// src/app/finance-report/finance-report.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-report',
  templateUrl: './finance-report.component.html',
  styleUrls: ['./finance-report.component.css']
})
export class FinanceReportComponent implements OnInit {
  reports = [
    { month: 'Janvier', revenue: 5000, expenses: 2000, profit: 3000 },
    { month: 'Février', revenue: 6000, expenses: 2500, profit: 3500 },
    { month: 'Mars', revenue: 7000, expenses: 3000, profit: 4000 },
    { month: 'Avril', revenue: 8000, expenses: 3500, profit: 4500 },
    { month: 'Mai', revenue: 9000, expenses: 4000, profit: 5000 },
    { month: 'Juin', revenue: 10000, expenses: 4500, profit: 5500 },
    { month: 'Juillet', revenue: 11000, expenses: 5000, profit: 6000 },
    { month: 'Août', revenue: 12000, expenses: 5500, profit: 6500 },
    { month: 'Septembre', revenue: 13000, expenses: 6000, profit: 7000 },
    { month: 'Octobre,', revenue: 14000, expenses: 6500, profit: 7500 },
    { month: 'Novembre', revenue: 15000, expenses: 7500, profit: 8000 },
    { month: 'Décembre', revenue: 16000, expenses: 8000, profit: 8500 },
  ];
  staticContent = {
    suggestions: [
      'Réduire les dépenses inutiles',
      'Investir dans des campagnes de publicité',
      'Augmenter les tarifs pendant la haute saison',
      'Proposer des offres spéciales pour attirer plus de clients'
    ]
  };
  constructor() { }

  ngOnInit(): void { }
}
