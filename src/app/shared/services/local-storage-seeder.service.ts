import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageSeederService {
  private localStorageKey = 'construction';
  private constructionSeed = [
    {
      "id": 1,
      "name": "Green House",
      "location": "Romanowicza Street, Cracow",
      "client": "IMS",
      "costEstimateId": 1,
      "manager": "John Doe",
      "contactId": [1],
      "description": "Example Construction Description",
      "taskId": [1],
      "status": "In progress"
    },
    {
      "id": 2,
      "name": "Office Building",
      "location": "Main Street, Los Angeles",
      "client": "ABC Inc.",
      "costEstimateId": 2,
      "manager": "Sarah Johnson",
      "contactId": [2],
      "description": "New office building construction.",
      "taskId": [2],
      "status": "Planning"
    },
    
    {
      "id": 3,
      "name": "Apartment Complex",
      "location": "Oak Avenue, New York",
      "client": "XYZ Developers",
      "costEstimateId": 3,
      "manager": "Michael Brown",
      "contactId": [3],
      "taskId": [3],
      "description": "Construction of a luxury apartment complex.",
      "status": "In progress"
    },
    
    {
      "id": 4,
      "name": "Hospital Renovation",
      "location": "Maple Street, Chicago",
      "client": "City Healthcare",
      "costEstimateId": 4,
      "manager": "Emily Davis",
      "contactId": [4],
      "description": "Renovation of the city hospital's facilities.",
      "taskId": [4],
      "status": "Completed"
    },
  ];

  private contactSeed = [
    {
      "id": 1,
      "name": "John",
      "surname": "Doe",
      "company": "IMS Budownictwo",
      "phone": 123456789,
      "email": "john.doe@example.com",
      "role": "Project Manager",
      "description": "Główna osoba kontaktowa dla projektu.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Zarządzanie"
    },
    {
      "id": 2,
      "name": "Alice",
      "surname": "Johnson",
      "company": "GWK System",
      "phone": 555123456,
      "email": "alice.j@example.com",
      "role": "Project Coordinator",
      "description": "Kluczowy kontakt do koordynacji projektu.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Projektowanie"
    },
    {
      "id": 3,
      "name": "Michael",
      "surname": "Brown",
      "company": "Max Development",
      "phone": 987654321,
      "email": "michael.b@example.com",
      "role": "Project Director",
      "description": "Dyrektor nadzorujący projekty budowlane.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Projektowanie"
    },
    {
      "id": 4,
      "name": "Emily",
      "surname": "Davis",
      "company": "Garden Residence",
      "phone": 333111999,
      "email": "emily.d@example.com",
      "role": "Project Manager",
      "description": "Odpowiedzialna za projekt renowacji szpitala.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Wykonawstwo"
    }
  ];
  

  private costEstimateSeed = [
    {
      "id": 1,
      "description": "Example Cost Estimate",
      "costOfConstructionWorks": 50000,
      "subcontractorCosts": 10000,
      "administrationCosts": 5000,
      "totalCost": 65000,
      "budget": 70000,
      "profit": 5000,
      "constructionId": 1,
      "paymentTerms": "Net 30 days",
      "paymentConditions": "Payment due upon completion",
      "attachments": ["attachment1.pdf", "attachment2.docx"]
    },
    {
      "id": 2,
      "description": "Office Building Estimation",
      "costOfConstructionWorks": 80000,
      "subcontractorCosts": 15000,
      "administrationCosts": 8000,
      "totalCost": 103000,
      "budget": 110000,
      "profit": 7000,
      "constructionId": 2,
      "paymentTerms": "Net 45 days",
      "paymentConditions": "Progress-based payments",
      "attachments": ["office-estimation.pdf", "office-plans.docx"]
    },
    
    {
      "id": 3,
      "description": "Apartment Complex Budget",
      "costOfConstructionWorks": 120000,
      "subcontractorCosts": 25000,
      "administrationCosts": 10000,
      "totalCost": 155000,
      "budget": 160000,
      "profit": 5000,
      "constructionId": 3,
      "paymentTerms": "Net 60 days",
      "paymentConditions": "Payment on project milestones",
      "attachments": ["apartment-estimate.pdf", "complex-plans.docx"]
    },
    
    {
      "id": 4,
      "description": "Hospital Renovation Costs",
      "costOfConstructionWorks": 30000,
      "subcontractorCosts": 6000,
      "administrationCosts": 3000,
      "totalCost": 39000,
      "budget": 40000,
      "profit": 1000,
      "constructionId": 4,
      "paymentTerms": "Net 30 days",
      "paymentConditions": "Payment upon completion and inspection",
      "attachments": ["hospital-costs.pdf", "renovation-plans.docx"]
    }
  ];

  private taskSeed = [
    {
      "id": 1,
      "name": "Task 1",
      "description": "Example task description",
      "scope": "Project scope",
      "constructionid": 1,
      "responsiblePerson": "Alice Smith",
      "contactId": 1,
      "completionDate": "2023-11-30",
      "cost": 2000
    },
    {
      "id": 2,
      "name": "Task 2",
      "description": "Design office building layout",
      "scope": "Architectural design",
      "constructionid": 2,
      "responsiblePerson": "Ella White",
      "contactId": 2,
      "completionDate": "2023-12-15",
      "cost": 3500
    },
    
    {
      "id": 3,
      "name": "Task 3",
      "description": "Apartment complex site survey",
      "scope": "Site analysis and survey",
      "constructionid": 3,
      "responsiblePerson": "David Clark",
      "contactId": 3,
      "completionDate": "2024-01-10",
      "cost": 5000
    },
    
    {
      "id": 4,
      "name": "Task 4",
      "description": "Hospital renovation electrical work",
      "scope": "Electrical installation",
      "constructionid": 4,
      "responsiblePerson": "Olivia Turner",
      "contactId": 4,
      "completionDate": "2023-12-30",
      "cost": 4500
    }
    
  ];

  constructor() { }

  ensureDataSeeder(): void {
    const dataToStore: any = {};

    this.constructionSeed.forEach((construction, index) => {
      dataToStore[`construction_${index + 1}`] = JSON.stringify(construction);
    });

    this.contactSeed.forEach((contact, index) => {
      dataToStore[`contact_${index + 1}`] = JSON.stringify(contact);
    });

    this.costEstimateSeed.forEach((costEstimate, index) => {
      dataToStore[`costEstimate_${index + 1}`] = JSON.stringify(costEstimate);
    });

    this.taskSeed.forEach((task, index) => {
      dataToStore[`task_${index + 1}`] = JSON.stringify(task);
    });

    for (const key in dataToStore) {
      localStorage.setItem(key, dataToStore[key]);
    }
  }
}
