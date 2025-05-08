export interface ClusterVisualization {
    image: string;
    stats: { [key: string]: { Rentable_Predicted: number; ProfitMargin: number; Amount: number } };
    error?: string;
  }