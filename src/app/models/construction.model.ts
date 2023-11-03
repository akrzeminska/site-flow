import { Contact } from "./contact.model";
import { CostEstimate } from "./cost-estimate.model";
import { Task } from "./task.model";

export interface Construction {
    id: number;
    name: string;
    location: string;
    client: string;
    costEstimateId: number;
    manager: string;
    contactId: number;
    description: string;
    taskId: number;
    status: string;
  }