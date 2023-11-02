import { Construction } from "./construction.model";

export interface CostEstimate {
    id: number;
    description: string;
    costOfConstructionWorks: number;
    subcontractorCosts: number;
    administrationCosts: number;
    construction: Construction;
    paymentTerms: string;
    paymentConditions: string;
    attachments: string[];
    totalCost: number;
    budget: number;
    profit: number;
  }