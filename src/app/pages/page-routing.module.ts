import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteListComponent } from './note-list/note-list.component';
import { PlainNoteComponent } from './plain-note/plain-note.component';

const routes: Routes = [
  { path: '', component: NoteListComponent, title:'X-Note UI - Notes' },
  { path: 'add', component: AddNoteComponent, title:'Add new Note' },
  { path: 'note/?id', component: NoteDetailComponent },
  {path:'plain', component:PlainNoteComponent, title:'Plain Note'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
