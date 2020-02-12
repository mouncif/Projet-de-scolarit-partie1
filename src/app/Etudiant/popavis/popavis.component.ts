import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Avis } from 'src/app/Models/Avis';

@Component({
  selector: 'app-popavis',
  templateUrl: './popavis.component.html',
  styleUrls: ['./popavis.component.css']
})
export class PopavisComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopavisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Avis) { }

  ngOnInit() {
  }

}
