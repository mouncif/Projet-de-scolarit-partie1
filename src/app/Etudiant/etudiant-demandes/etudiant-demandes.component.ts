import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Service/etudiant.service';
import { Demande } from 'src/app/Models/Demande';

@Component({
  selector: 'app-etudiant-demandes',
  templateUrl: './etudiant-demandes.component.html',
  styleUrls: ['./etudiant-demandes.component.css']
})
export class EtudiantDemandesComponent implements OnInit {

  constructor(private service : EtudiantService) { }
  demandes : Demande[]=[]
  demandeEtudiant : Demande[]=[]
  displayedColumns: string[] = ['id', 'idPiece', 'date_creation', 'date_recuperation','siValider'];
  ngOnInit() {
    this.getDemandes()

  }

  getDemandes(){
    this.service.getDemandes().subscribe(value => 
      {this.demandes=value
        this.demandeEtudiant =[]
        this.demandes.forEach(element => {
          if (element.idEtudiant==123){
            this.demandeEtudiant.push(element)            
          }
        })
  });
  }

}
