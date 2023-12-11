import { Construction } from "./construction.model";

export interface CostEstimate {
    id: number;
    name: string;
    author: string;
    description: string;
    client: string;
    location: string;
    contractNumber: string;
    costEstimateValue: number;
    constructionId: number;
    contactId: number[];
    detailedCosts: []
  }