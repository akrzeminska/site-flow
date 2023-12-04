import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-upload-dialog',
  templateUrl: './avatar-upload-dialog.component.html',
  styleUrls: ['./avatar-upload-dialog.component.scss']
})
export class AvatarUploadDialogComponent {
  selectedFile: any = 'null';

  onFileSelected(event: any): void {
    console.log(event);
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload() {
    
  }
}
