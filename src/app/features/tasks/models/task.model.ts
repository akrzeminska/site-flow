import { Construction } from '../../constructions/models/construction.model';
import { Contact } from '../../contacts/models/contact.model';

type taskStatus = 'nowe' | 'w trakcie' | 'do zatwierdzenia' | 'zakończone';

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
  status: taskStatus;
}
