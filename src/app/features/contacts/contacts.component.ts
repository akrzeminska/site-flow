import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  showFiller = false;
  contacts: any[] = [
    {
      "id": 1,
      "name": "John",
      "surname": "Doe",
      "company": "IMS Budownictwo",
      "phone": 1234567890,
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
      "phone": 5551234567,
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
      "phone": 9876543210,
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
      "phone": 3331119999,
      "email": "emily.d@example.com",
      "role": "Project Manager",
      "description": "Odpowiedzialna za projekt renowacji szpitala.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Wykonawstwo"
    }
  ];
  
}
