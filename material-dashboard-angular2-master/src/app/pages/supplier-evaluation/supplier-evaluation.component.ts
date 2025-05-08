import { Component, OnInit } from '@angular/core';
import { ApiSSupplierEvaluationServiceervice } from '../../services/supplier-evaluation.service';
import { SupplierEvaluation, Recommendation, ClusterVisualization, ChatbotResponse, ClusterStats, ClusteringMetrics } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-evaluation',
  templateUrl: './supplier-evaluation.component.html',
  styleUrls: ['./supplier-evaluation.component.css']
})
export class SupplierEvaluationComponent implements OnInit {
  isLoading = false;
  errorMessage: string | null = null;

  // Liste des fournisseurs
  suppliers: any[] = [];
  selectedSupplier: number | null = null;
  evaluation: SupplierEvaluation | null = null;

  // Prédiction d'un nouveau fournisseur
  supplierInput = { amount: 0, profit_margin: 0, total_assets: 0, total_liabilities: 0 };
  prediction: SupplierEvaluation | null = null;

  // Recommandations
  recommendations: Recommendation[] = [];
  recommendationError: string | null = null;

  // Visualisation des clusters
  visualization: ClusterVisualization | null = null;

  // Chatbot
  message: string = '';
  responses: { user: string, bot: string }[] = [];

  // Métriques et statistiques
  metrics: ClusteringMetrics = { silhouette_score: 0, calinski_harabasz: 0, davies_bouldin: 0 };
  clusterStats: ClusterStats[] = [];
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/financial', title: 'Financial', icon: 'attach_money', class: '' },
    { path: '/SupplierFinancial', title: 'Suppliers', icon: 'store', class: '' },
    { path: '/InvoicePredection', title: 'InvoicePredection', icon: 'integration_instructions', class: 'active' }
  ];
  constructor(private apiService: ApiSSupplierEvaluationServiceervice, public router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;

    // Charger les métriques de clustering
    this.apiService.getClusteringMetrics().subscribe({
      next: (data) => this.metrics = data,
      error: (err) => this.errorMessage = 'Erreur lors du chargement des métriques'
    });

    // Charger les statistiques des clusters
    this.apiService.getClusterStats().subscribe({
      next: (data) => this.clusterStats = data,
      error: (err) => this.errorMessage = 'Erreur lors du chargement des statistiques'
    });

    // Charger la liste des fournisseurs
    this.apiService.getSuppliers().subscribe({
      next: (data) => {
        this.suppliers = data.map(id => ({
          Fk_Supplier: id,
          Cluster: 0, // À remplacer par les données réelles
          Cluster_Name: 'Reliable', // À remplacer
          PCA_X: 0, // À remplacer
          PCA_Y: 0 // À remplacer
        }));
      },
      error: (err) => this.errorMessage = 'Erreur lors du chargement des fournisseurs'
    });

    // Charger les recommandations
    this.apiService.getRecommendations().subscribe({
      next: (data) => {
        this.recommendations = data.suppliers;
        this.recommendationError = data.error || null;
      },
      error: (err) => this.errorMessage = 'Erreur lors du chargement des recommandations'
    });

    // Charger la visualisation des clusters
    this.apiService.getClusterVisualization().subscribe({
      next: (data) => this.visualization = data,
      error: (err) => this.errorMessage = 'Erreur lors du chargement de la visualisation'
    });

    this.isLoading = false;
  }

  evaluateSupplier(): void {
    if (this.selectedSupplier) {
      this.apiService.evaluateSupplier(this.selectedSupplier).subscribe({
        next: (data) => this.evaluation = data,
        error: (err) => this.errorMessage = 'Erreur lors de l\'évaluation du fournisseur'
      });
    }
  }

  predictSupplier(): void {
    this.apiService.predictSupplier(this.supplierInput).subscribe({
      next: (data) => this.prediction = data,
      error: (err) => this.errorMessage = 'Erreur lors de la prédiction du fournisseur'
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      const userMessage = this.message;
      this.apiService.sendChatbotMessage(userMessage).subscribe({
        next: (data) => {
          this.responses.push({ user: userMessage, bot: data.response || data.error || 'Erreur' });
          this.message = '';
        },
        error: (err) => this.errorMessage = 'Erreur lors de l\'envoi du message'
      });
    }
  }
}