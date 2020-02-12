import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Service/etudiant.service';
import { Reclamation } from 'src/app/Models/Reclamation';

@Component({
  selector: 'app-etudiant-reclamations',
  templateUrl: './etudiant-reclamations.component.html',
  styleUrls: ['./etudiant-reclamations.component.css']
})
export class EtudiantReclamationsComponent implements OnInit {

  constructor(private service : EtudiantService) { }
  note : Reclamation[]=[]
  peda : Reclamation[]=[]
  noteCulums : String[]=['id','module','partie','notePV','note', 'date']
  pedCulums : String[]=['id','date','commantaire']
  ngOnInit() {
    console.log(this.note);
    
    this.getReclamations()
    console.log(this.note)
  }
  getReclamations(){
    this.service.getReclamations().subscribe(value => 
      {
        console.log(value);
        
       this. note=[]
        this.peda =[]
        value.forEach(element => {
          if (element.etudiant==123457){
            if (element.type=="note")
              this.note.push(element)
            else this.peda.push(element)
          }
        })
  });

  }

}
