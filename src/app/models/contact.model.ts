import { Construction } from "./construction.model";

export interface Contact {
    id: number;
    name: string;
    surname: string;
    company: string;
    phone: string;
    email: string;
    role: string;
    description: string;
    construction: Construction[];
  }