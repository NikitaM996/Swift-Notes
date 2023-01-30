import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwiftNote } from 'src/app/models/swift-note';

@Component({
  selector: 'app-edit-swift-note',
  templateUrl: './edit-swift-note.component.html',
  styleUrls: ['./edit-swift-note.component.scss']
})
export class EditSwiftNoteComponent {
  title: string = '';
  desc: string = '';
  constructor(
    public dialogRef: MatDialogRef<EditSwiftNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SwiftNote,
  ) {
    this.title = this.data.title;
    this.desc = this.data.desc;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.dialogRef.close({
      ...this.data,
      title: this.title,
      desc: this.desc
    });
  }
}
