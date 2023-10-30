import { Construction } from "./construction.model";
import { Contact } from "./contact.model";

export interface Task {
    id: number;
    name: string;
    construction: Construction[];
    description: string;
    scope: string;
    responsiblePerson: string;
    contact: Contact;
    completionDate: Date;
    cost: number;
  }