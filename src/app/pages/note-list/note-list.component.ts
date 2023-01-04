import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes:INote[] = [
    {id:1, title:'First Note', body:'lorem ipsum', addedOn: new Date(), isActive:true},
    {id:2, title:'Second Note', body:'lorem ipsum', addedOn: new Date(), isActive:true},
    {id:3, title:'Third Note', body:'lorem ipsum', addedOn: new Date(), isActive:true},
  ];
  constructor() {}

  ngOnInit() {}
  noteClick(id:number){
    console.log(id);
  }
}

export interface INote {
  id: number;
  title: string;
  body: string;
  addedOn: Date;
  isActive: boolean;
}
