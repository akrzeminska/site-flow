import { Contact } from '../../contacts/models/contact.model';
import { CostEstimate } from '../../cost-estimates/models/cost-estimate.model';
import { Task } from '../../tasks/models/task.model';

export interface Construction {
  id: number;
  name: string;
  location: string;
  client: string;
  costEstimateId: number;
  manager: string;
  contactId: number[];
  description: string;
  taskId: number[];
  status: string;
}
