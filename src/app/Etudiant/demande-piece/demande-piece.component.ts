import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Piece } from 'src/app/Models/Piece';
import { EtudiantService } from '../Service/etudiant.service';
import{FormGroup,FormControl,Validators,FormBuilder}from"@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Demande } from 'src/app/Models/Demande';

@Component({
  selector: 'app-demande-piece',
  templateUrl: './demande-piece.component.html',
  styleUrls: ['./demande-piece.component.css']
})
export class DemandePieceComponent implements OnInit {
  liste : String[]=[]
  minDate: Date;
  demandes : Demande[]=[]
  private demande : Demande={
  id :"",
  idEtudiant: 1,
  idPiece: "",
  date: ""
  };
 form = new FormGroup({
    selectFormControl :new FormControl('', Validators.required),
    dateFormControl :new FormControl('', Validators.required) 
  });
  ngOnInit() {
    this.remplireListe()
    this.minDate = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay());
    
  }
  constructor(
    public dialogRef: MatDialogRef<DemandePieceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Piece, private Service : EtudiantService,private _snackBar: MatSnackBar) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  remplireListe(){
    let pieces : Piece[]=[]
    this.Service.getPiece().subscribe(value => 
      {
          pieces=value;
          pieces.forEach(element => {
            if(!element.siCache){
              this.liste.push(element.label)
            }
          });
      });
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  onSubmit(){
    this.demande.idEtudiant=123
    this.Service.demanderPiece(this.demande).subscribe((demande)=>{
      this.demandes = [this.demande, ...this.demandes];
    });
    this.dialogRef.close();
    this._snackBar.open("votre demande est enregistrée", "fermer", {
      duration: 4000,
    });
  }

}
