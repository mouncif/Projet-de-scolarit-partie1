import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Service/etudiant.service';
import { MatDialog } from '@angular/material';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Avis } from 'src/app/Models/Avis';
import { PopavisComponent } from '../popavis/popavis.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgbCarouselConfig ]

})
export class HomeComponent implements OnInit {

  tabl:Avis[]=[];

  constructor(private avis:EtudiantService,public dialog: MatDialog,config: NgbCarouselConfig) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.getAvis();
   
  }

  getAvis(){
  this.avis.findAll().subscribe((tabl: any[])=>{
    console.log(tabl);
    this.tabl = tabl;
  })
  }

 openDialog(event, donne) {
    console.log("Checking passed item: ",donne);
    const dialogRef = this.dialog.open(PopavisComponent,{
      width:'500px',
      height:'350px',
      data:donne,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
