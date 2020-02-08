import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Piece } from 'src/app/Models/Piece';
import { EtudiantService } from '../Service/etudiant.service';
import{FormGroup,FormControl,Validators}from"@angular/forms";

@Component({
  selector: 'app-demande-piece',
  templateUrl: './demande-piece.component.html',
  styleUrls: ['./demande-piece.component.css']
})
export class DemandePieceComponent implements OnInit {
  liste : String[]=[]
  minDate: Date;
  
  form:FormGroup = new FormGroup({
    selectFormControl : new FormControl('', Validators.required),
    dateFormControl : new FormControl('', Validators.required)
  });
  
  ngOnInit() {
    this.remplireListe()
    this.minDate = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay()+3);
  }
  constructor(
    public dialogRef: MatDialogRef<DemandePieceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Piece, private Service : EtudiantService) {
      
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
    console.log("done");
  }

}
