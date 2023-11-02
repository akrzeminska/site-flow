import { Contact } from "./contact.model";
import { CostEstimate } from "./cost-estimate.model";
import { Task } from "./task.model";

export interface Construction {
    id: number;
    name: string;
    location: string;
    client: string;
    costEstimate: CostEstimate;
    manager: string;
    contact: Contact;
    description: string;
    tasks: Task[];
    status: string;
  }