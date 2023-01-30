import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSwiftNoteComponent } from '../edit-swift-note/edit-swift-note.component';

@Component({
  selector: 'app-swift-notes',
  templateUrl: './swift-notes.component.html',
  styleUrls: ['./swift-notes.component.scss']
})
export class SwiftNotesComponent {

  notes: any[];
  desc: string;

  constructor(public dialog: MatDialog) {
    const notes = localStorage.getItem('swiftNotes')
    this.notes = notes ? JSON.parse(notes) : [];
    this.desc = '';
  }

  openEditDialog(note: any) {
    const dialogRef = this.dialog.open(EditSwiftNoteComponent, {
      data: { id: note.id, title: note.title, desc: note.desc },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        for (let i = 0; i < this.notes.length; i++) {
          if (this.notes[i].id === note.id ) {
            
            this.notes[i].title = result.title;
            this.notes[i].desc = result.desc;
            
            localStorage.setItem('swiftNotes', JSON.stringify(this.notes));
            break;
          }
        }
      }
    });
  }

  addNote() {
    const dialogRef = this.dialog.open(EditSwiftNoteComponent, {
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.notes.push({ ...result, id: this.notes.length + 1 })
        localStorage.setItem('swiftNotes', JSON.stringify(this.notes));
      }
    });
  }

}
