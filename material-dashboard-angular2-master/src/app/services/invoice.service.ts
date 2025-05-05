// invoice.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InvoiceInput {
  Amount: number;
  VATRate: number;
  SupplierPrice: number;
  PaymentStatus: string;
}

export interface PredictionOutput {
  prediction: string; // "Approved" or "Not Approved"
  probabilities: number[]; // [probNotApproved, probApproved]
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  // Adjust to match your actual working backend port (e.g., Flask/FastAPI endpoint)
  private apiUrl = 'http://localhost:8503';

  constructor(private http: HttpClient) {}

  // SINGLE invoice prediction
  predict(invoice: InvoiceInput): Observable<PredictionOutput> {
    return this.http.post<PredictionOutput>(`${this.apiUrl}/predict`, invoice);
  }

  // BATCH CSV upload
  predictBatch(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/predict_batch`, formData, {
      responseType: 'blob'
    });
  }
}
