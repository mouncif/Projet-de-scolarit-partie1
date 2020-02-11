import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Piece } from 'src/app/Models/Piece';
import { EtudiantService } from '../Service/etudiant.service';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Demande } from 'src/app/Models/Demande';
import { DatePipe } from '@angular/common';

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
  date_creation:"",
  date_recuperation:"",
  siValider:false
  };
  curentDate : Date;
 form = new FormGroup({
    selectFormControl :new FormControl('', Validators.required),
    dateFormControl :new FormControl('', Validators.required) 
  });
  ngOnInit() {
    this.remplireListe()
    this.minDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)*2);
  }
  constructor(
    public dialogRef: MatDialogRef<DemandePieceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Piece, private Service : EtudiantService,
    private _snackBar: MatSnackBar, private pipe : DatePipe) {
      
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
    this.demande.siValider=false;
    this.demande.date_creation= this.pipe.transform(new Date(), 'yyyy/MM/dd')
    this.demande.date_recuperation= this.pipe.transform(this.demande.date_recuperation, 'yyyy/MM/dd')

    this.Service.demanderPiece(this.demande).subscribe((demande)=>{
      this.demandes = [this.demande, ...this.demandes];
    });
    this.dialogRef.close();
    this._snackBar.open("votre demande est enregistrée", "fermer", {
      duration: 4000,
    });
  }
  getOnePiece(lebel :String){
    let pieces : Piece[]=[]
    this.Service.getPiece().subscribe(value => 
      {
          pieces=value;
          pieces.forEach(element => {
            if(element.label==lebel){
              console.log(element);
             return element
            }
          });
      });
      return null;
  }
  onNgModelChange(event ){
    let p : Piece ;
    let pieces : Piece[]=[]
    this.Service.getPiece().subscribe(value => 
      {
          pieces=value;
          pieces.forEach(element => {
            if(element.label==event){
              console.log(element);
              this.minDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)*2*element.nbr_totale_demander/element.nbr_total_par_jour);
              if(element.nbr_demande_par_jour== element.nbr_total_par_jour-1){
                element.nbr_demande_par_jour=1
                element.nbr_totale_demander+=1
              }
              else{
                element.nbr_demande_par_jour+=1
              }
            }
          });
      });
    
   
    


  }

}
