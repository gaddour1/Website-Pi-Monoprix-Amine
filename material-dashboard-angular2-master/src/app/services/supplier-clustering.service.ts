import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierClusteringService {
  private apiUrl = 'http://localhost:8502'; // API FastAPI clustering

  constructor(private http: HttpClient) {}

  getAllSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/suppliers`).pipe(catchError(this.handleError));
  }

  getClusteringMetrics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/metrics`).pipe(catchError(this.handleError));
  }

  getClusterStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cluster-stats`).pipe(catchError(this.handleError));
  }

  evaluateNewSupplier(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/evaluate`, payload).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Erreur du serveur.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Erreur serveur ${error.status} : ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
