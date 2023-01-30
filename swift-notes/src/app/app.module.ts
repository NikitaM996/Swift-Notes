import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EditorModule } from '@tinymce/tinymce-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiftNotesComponent } from './components/swift-notes/swift-notes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditSwiftNoteComponent } from './components/edit-swift-note/edit-swift-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiftNotesComponent,
    EditSwiftNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
