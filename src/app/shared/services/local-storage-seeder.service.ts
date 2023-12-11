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
      "name": 'K1/03/2021 "Osiedle pod Dębami"',
      "author": 'Janusz Brzęczyszczykiewicz',
      "description": 'Roboty budowlane w zakresie stanu surowego otwartego',
      "client": 'IMS Budownictwo Sp. z o.o.',
      "location": 'ul. Zabłocie 13, 30-702 Kraków',
      "contractNumber": '273/2021-UPL',
      "costEstimateValue": 1500000,
      "constructionId": 1,
      "contactId": [1]
    },
    {
      "id": 2,
      "name": 'B2/05/2022 "Apartamenty Nad Jeziorem"',
      "author": 'Alicja Kowalska',
      "description": 'Budowa luksusowych apartamentów nad jeziorem',
      "client": 'Firma Deweloperska XYZ Sp. z o.o.',
      "location": 'ul. Nadbrzeżna 7, 50-200 Wrocław',
      "contractNumber": '109/2022-XYZ',
      "costEstimateValue": 3000000,
      "constructionId": 2,
      "contactId": [2]
    },
    {
      "id": 3,
      "name": 'C3/07/2023 "Nowoczesne Biurowce Plaza"',
      "author": 'Marcin Nowak',
      "description": 'Budowa nowoczesnych biurowców w centrum miasta',
      "client": 'Plaza Development Sp. z o.o.',
      "location": 'Plac Wolności 5, 00-001 Warszawa',
      "contractNumber": '512/2023-PLD',
      "costEstimateValue": 5000000,
      "constructionId": 3,
      "contactId": [3]
    },
    {
      "id": 4,
      "name": 'D4/09/2024 "Parkowa Rezydencja"',
      "author": 'Magdalena Zielińska',
      "description": 'Realizacja ekskluzywnej parkowej rezydencji',
      "client": 'Firma Inwestycyjna ABC Sp. z o.o.',
      "location": 'ul. Parkowa 10, 80-300 Gdańsk',
      "contractNumber": '701/2024-ABC',
      "costEstimateValue": 8000000,
      "constructionId": 4,
      "contactId": [4]
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
