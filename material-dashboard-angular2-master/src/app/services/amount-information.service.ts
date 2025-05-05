// amount-information.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmountInformationService {
  private apiUrl = 'http://localhost:8000'; // Vérifiez que FastAPI s'exécute sur ce port

  constructor(private http: HttpClient) {}

  // Récupérer les ventes journalières
  getDailySales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily-sales`).pipe(
      catchError(this.handleError)
    );
  }

  // Filtrer les ventes par plage de dates
  filterSales(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily-sales/filter?start=${startDate}&end=${endDate}`).pipe(
      catchError(this.handleError)
    );
  }

  // Télécharger le CSV des données filtrées
  downloadFilteredCSV(startDate: string, endDate: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/daily-sales/filter/download?start=${startDate}&end=${endDate}`, {
      responseType: 'blob'
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Prédire les ventes
  predictSales(days: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily-sales/predict?days=${days}`).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur : ${error.status}, Message : ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}