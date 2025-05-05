import { Component } from '@angular/core';
import { InvoiceService, InvoiceInput, PredictionOutput } from '../../services/invoice.service';

@Component({
  selector: 'app-InvoicePredection',
  templateUrl: './InvoicePredection.component.html',
  styleUrls: ['./InvoicePredection.component.scss']
})
export class InvoicePredectionComponent {
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/financial', title: 'Financial', icon: 'attach_money', class: '' },
    { path: '/SupplierFinancial', title: 'Suppliers', icon: 'store', class: '' },
    { path: '/InvoicePredection', title: 'InvoicePredection', icon: 'integration_instructions', class: 'active' }
  ];

  invoice: InvoiceInput = {
    Amount: 5000.00,
    VATRate: 10.00,
    SupplierPrice: 1000.00,
    PaymentStatus: 'Paid'
  };

  predictionResult: PredictionOutput | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';
  selectedFile: File | null = null;

  constructor(private invoiceService: InvoiceService) {}

  // Submit individual prediction
  submitPrediction(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.predictionResult = null;

    this.invoiceService.predict(this.invoice).subscribe({
      next: (result) => {
        this.predictionResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = `Error: ${error.statusText || 'Unknown error. Please check the server or network connection.'}`;
        this.isLoading = false;
      }
    });
  }

  // Handle file selection for CSV upload
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Submit batch prediction
  submitBatchPrediction(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a CSV file.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.invoiceService.predictBatch(this.selectedFile).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'invoice_predictions.csv';
        a.click();
        window.URL.revokeObjectURL(url);
        this.isLoading = false;
        this.selectedFile = null;
      },
      error: (error) => {
        this.errorMessage = `Error: ${error.statusText || 'Unknown error. Please check the server or network connection.'}`;
        this.isLoading = false;
      }
    });
  }
}