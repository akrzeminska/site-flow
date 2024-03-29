import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/features/contacts/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  @Output() onDelete = new EventEmitter<number>();

  deleteElement(id: number) {
    this.onDelete.emit(id);
  }

  @Output() onEdit = new EventEmitter<Contact>();

  editElement() {
    this.onEdit.emit(this.contact);
  }

  getCardBackground(category: string): object {
    switch (category) {
      case 'Zarządzanie':
        return { 'background-color': '#e4e5e7' };
      case 'Projektowanie':
        return { 'background-color': '#e3f7f7' };
      case 'Wykonawstwo':
        return { 'background-color': '#fcf2e7' };
      default:
        return {};
    }
  }
}
