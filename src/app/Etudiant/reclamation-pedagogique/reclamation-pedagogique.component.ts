import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from '../Service/etudiant.service';
import { FormControl, Validators } from '@angular/forms';
import { Reclamation } from 'src/app/Models/Reclamation';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reclamation-pedagogique',
  templateUrl: './reclamation-pedagogique.component.html',
  styleUrls: ['./reclamation-pedagogique.component.css']
})
export class ReclamationPedagogiqueComponent implements OnInit {
  private e :Etudiant={
  nom: "Doe ",
  apogee: 123457,
  cin: "A12345",
  prenom: "John",
  datenaissance: "01/10/1996",
  codeMassar:"M1234567",
  ville:"Benimellal",
  idFiliere: "fil",
  Tel: "0612345678",
  siValide: true,
  password: "",
  image: "image",
  email: "d",
  semestre: [1,2],
  noteModule: 12
  };
  res : Reclamation[]=[];
  input : FormControl;
  private rec :Reclamation ={
    id:"",
    etudiant:0,
    commantaire:"",
    type:""
  };
  comment : string;
  constructor(private service : EtudiantService,private _snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.input = new FormControl('',Validators.required);
  }
 
  reclamation(){
    this.rec.etudiant=this.e.apogee
    this.rec.type="pedagogique"
    this.rec.commantaire=this.comment
    this.service.addReclamation(this.rec).subscribe((rec)=>{
      this.res = [rec, ...this.res];
      this.comment=""
    });
    this._snackBar.open("votre reclamation est enregistrée", "fermer", {
      duration: 4000,
      
      
    });
  }

}
