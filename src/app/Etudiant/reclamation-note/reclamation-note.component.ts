import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation-note',
  templateUrl: './reclamation-note.component.html',
  styleUrls: ['./reclamation-note.component.css']
})
export class ReclamationNoteComponent implements OnInit {

  constructor() { }
  liste : String[] =[]
  ngOnInit() {
    for (var i=1;i<=38;i++){
      this.liste.push("module "+i);
    }
  }

}
