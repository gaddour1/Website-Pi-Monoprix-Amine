export interface ClusterStats {
    Cluster: number;
    Cluster_Name: string;
    Mean_Payment_Delay: number;
    Paid_Ratio: number;
    Unpaid_Ratio: number;
    Total_Disputes: number;
  }
  
  export interface ClusteringMetrics {
    silhouette_score: number;
    calinski_harabasz: number;
    davies_bouldin: number;}