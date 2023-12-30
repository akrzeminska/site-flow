import { Construction } from "./construction.model";
import { Contact } from "./contact.model";

export interface Task {
    id: number;
    name: string;
    constructionId: number[];
    description: string;
    scope: string;
    responsiblePerson: string;
    contactId: number;
    completionDate: string;
    cost: number;
  }