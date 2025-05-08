import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SupplierEvaluation, Recommendation, ClusterVisualization, ChatbotResponse, ClusterStats, ClusteringMetrics } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiSSupplierEvaluationServiceervice {
  private apiUrl = 'http://localhost:8501'; // URL de l'API FastAPI

  constructor(private http: HttpClient) { }

  // Récupérer la liste des fournisseurs
  getSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/suppliers`);
  }

  // Évaluer un fournisseur existant
  evaluateSupplier(supplierId: number): Observable<SupplierEvaluation> {
    return this.http.get<SupplierEvaluation>(`${this.apiUrl}/evaluate/${supplierId}`);
  }

  // Prédire un nouveau fournisseur
  predictSupplier(data: any): Observable<SupplierEvaluation> {
    return this.http.post<SupplierEvaluation>(`${this.apiUrl}/predict`, data);
  }

  // Obtenir les recommandations
  getRecommendations(): Observable<{ suppliers: Recommendation[]; error?: string }> {
    return this.http.get<{ suppliers: Recommendation[]; error?: string }>(`${this.apiUrl}/recommendations`);
  }

  // Obtenir la visualisation des clusters
  getClusterVisualization(): Observable<ClusterVisualization> {
    return this.http.get<ClusterVisualization>(`${this.apiUrl}/clusters`);
  }

  // Interagir avec le chatbot
  sendChatbotMessage(message: string): Observable<ChatbotResponse> {
    return this.http.post<ChatbotResponse>(`${this.apiUrl}/chatbot`, { message });
  }

  // Données fictives pour les métriques et statistiques
  getClusteringMetrics(): Observable<ClusteringMetrics> {
    return of({
      silhouette_score: 0.55,
      calinski_harabasz: 1234.56,
      davies_bouldin: 0.89
    });
  }

  getClusterStats(): Observable<ClusterStats[]> {
    return of([
      { Cluster: 0, Cluster_Name: 'Reliable', Mean_Payment_Delay: 10.5, Paid_Ratio: 0.95, Unpaid_Ratio: 0.05, Total_Disputes: 2 },
      { Cluster: 1, Cluster_Name: 'Risky', Mean_Payment_Delay: 20.3, Paid_Ratio: 0.60, Unpaid_Ratio: 0.40, Total_Disputes: 15 },
      { Cluster: 2, Cluster_Name: 'High-Volume', Mean_Payment_Delay: 15.2, Paid_Ratio: 0.80, Unpaid_Ratio: 0.20, Total_Disputes: 8 }
    ]);
  }
}