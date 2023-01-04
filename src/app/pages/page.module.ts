import { NgModule } from '@angular/core';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteListComponent } from './note-list/note-list.component';
import { PageRoutingModule } from './page-routing.module';
import { PlainNoteComponent } from './plain-note/plain-note.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    PageRoutingModule,
    NzTableModule,
    NzButtonModule,
    DatePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  declarations: [
    NoteListComponent,
    AddNoteComponent,
    NoteDetailComponent,
    PlainNoteComponent,
  ],
  exports: [
    NoteListComponent,
    AddNoteComponent,
    NoteDetailComponent,
    PlainNoteComponent,
    AgGridModule
  ],
})
export class PageModule {}
