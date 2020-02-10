import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/Reclamation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EtudiantService } from '../Service/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reclamation-note',
  templateUrl: './reclamation-note.component.html',
  styleUrls: ['./reclamation-note.component.css']
})
export class ReclamationNoteComponent implements OnInit {
  private rec :Reclamation ={
    id:"",
    etudiant:0,
    commantaire:"",
    type:"",
    module:"",
    note:0,
    notePV:0,
    partie:""
  };
  private e :Etudiant ={
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
  constructor(private service :EtudiantService, private _snackBar: MatSnackBar) { }
  liste : String[] =[]
  form = new FormGroup({
    module : new FormControl('',Validators.required),
    partie : new FormControl('',Validators.required),
    notePV : new FormControl('',Validators.required),
    note : new FormControl('',Validators.required),
  });
  ngOnInit() {
    for (var i=1;i<=38;i++){
      this.liste.push("module "+i);
    }

  }
  onSubmit(){
    this.rec.etudiant=this.e.apogee
    this.rec.type="note";
    this.rec.commantaire="";
    this.service.addReclamation(this.rec).subscribe((rec)=>{
      this.res = [rec, ...this.res];
      
    });
    this.form.setValue({
      module :"",
      partie :"",
      notePV : "",
      note : "",
    });

    this._snackBar.open("votre reclamation est enregistrée", "fermer", {
      duration: 4000,
    });
  }


}
