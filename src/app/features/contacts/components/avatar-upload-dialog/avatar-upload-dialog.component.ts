import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { UploadedFileService } from 'src/app/shared/services/uploaded-file.service';

@Component({
  selector: 'app-avatar-upload-dialog',
  templateUrl: './avatar-upload-dialog.component.html',
  styleUrls: ['./avatar-upload-dialog.component.scss']
})
export class AvatarUploadDialogComponent {
    selectedFile: any = 'null';
    base64Image: string = '';

  constructor(private uploadedFileService: UploadedFileService,
    private dialogRef: MatDialogRef<AvatarUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {}
    

  onFileSelected(event: any): void {
    console.log(event);
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile);

    if (this.selectedFile) {
      const reader = new FileReader();

      reader.readAsDataURL(this.selectedFile);

      reader.onload = () => {
        this.uploadedFileService.create(this.data.id, reader.result as string).subscribe((result) => {
          if (result) {
            console.log('Pomyślnie zapisano obraz.');
            this.base64Image = reader.result as string;
            // console.log(this.base64Image);
          } else {
            console.log('Błąd podczas zapisania obrazu.');
          }
        });
      }
    }
  }

  onSave() {
    this.dialogRef.close(true);
  }

  dismiss() {
    this.dialogRef.close(false);
  }
}
