import { Construction } from '../../constructions/models/construction.model';

export interface Contact {
  taskName: any;
  id: number;
  name: string;
  surname: string;
  company: string;
  phone: number;
  email: string;
  role: string;
  description: string;
  taskId: number[];
  constructionId: number[];
  category: string;
  avatar?: string;
}
