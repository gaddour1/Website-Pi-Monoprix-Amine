import { Component, OnInit } from '@angular/core';
import { SupplierClusteringService } from '../../services/supplier-clustering.service';
@Component({
  selector: 'app-supplier-clustering',
  templateUrl: './supplier-clustering.component.html',
  styleUrls: ['./supplier-clustering.component.scss']
})
export class SupplierClusteringComponent implements OnInit {
  suppliers: any[] = [];
  clusterStats: any[] = [];
  metrics: any = {};
  errorMessage: string = '';
  isLoading = false;

  // Menu utilisé pour la sidebar (identique aux autres pages)
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/amount-information', title: 'Sales Prediction', icon: 'show_chart', class: '' },
    { path: '/supplier-clustering', title: 'Clustering', icon: 'store', class: 'active' },
    { path: '/invoice-predection', title: 'Invoice Prediction', icon: 'integration_instructions', class: '' }
  ];

  constructor(private clusteringService: SupplierClusteringService) {}

  ngOnInit(): void {
    this.loadSuppliers();
    this.loadMetrics();
    this.loadClusterStats();
  }

  loadSuppliers(): void {
    this.isLoading = true;
    this.clusteringService.getAllSuppliers().subscribe({
      next: data => {
        this.suppliers = data;
        this.isLoading = false;
      },
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      }
    });
  }

  loadMetrics(): void {
    this.clusteringService.getClusteringMetrics().subscribe({
      next: data => this.metrics = data,
      error: err => this.errorMessage = err.message
    });
  }

  loadClusterStats(): void {
    this.clusteringService.getClusterStats().subscribe({
      next: data => this.clusterStats = data,
      error: err => this.errorMessage = err.message
    });
  }
}