import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
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
}
