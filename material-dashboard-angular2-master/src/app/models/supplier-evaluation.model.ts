export interface SupplierEvaluation {
    supplier_id?: number;
    db_supplier_id?: string;
    prediction?: string;
    cluster?: string;
    features?: { [key: string]: number };
    confidence?: number;
    error?: string;
  }