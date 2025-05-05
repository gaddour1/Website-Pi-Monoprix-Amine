import { Component, OnInit } from '@angular/core';
import { AmountInformationService } from '../../services/amount-information.service';

@Component({
  selector: 'app-amount-information',
  templateUrl: './amount-information.component.html',
  styleUrls: ['./amount-information.component.scss']
})
export class AmountInformationComponent implements OnInit {
  salesData: any[] = [];
  filteredData: any[] = [];
  predictions: any[] = [];
  startDate: string = '';
  endDate: string = '';
  forecastDays: number = 30;
  isLoading: boolean = false;
  errorMessage: string = '';

  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/financial', title: 'Financial', icon: 'attach_money', class: '' },
    { path: '/SupplierFinancial', title: 'Suppliers', icon: 'store', class: '' },
    { path: '/InvoicePredection', title: 'InvoicePredection', icon: 'integration_instructions', class: 'active' }
  ];

  constructor(private amountService: AmountInformationService) {}

  ngOnInit(): void {
    this.loadDailySales();
  }

  loadDailySales(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.amountService.getDailySales().subscribe({
      next: (data) => {
        this.salesData = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }

  filterSales(): void {
    if (this.startDate && this.endDate) {
      this.isLoading = true;
      this.errorMessage = '';
      this.amountService.filterSales(this.startDate, this.endDate).subscribe({
        next: (data) => {
          this.filteredData = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Veuillez sélectionner les deux dates.';
    }
  }

  downloadFilteredCSV(): void {
    if (this.startDate && this.endDate) {
      this.isLoading = true;
      this.errorMessage = '';
      this.amountService.downloadFilteredCSV(this.startDate, this.endDate).subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'filtered_sales.csv';
          a.click();
          window.URL.revokeObjectURL(url);
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Veuillez sélectionner les deux dates.';
    }
  }

  predictSales(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.amountService.predictSales(this.forecastDays).subscribe({
      next: (data) => {
        this.predictions = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }
}
