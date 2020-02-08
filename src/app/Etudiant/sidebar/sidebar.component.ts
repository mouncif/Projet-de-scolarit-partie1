import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EtudiantService } from '../Service/etudiant.service';
import { MenuItems } from 'src/app/Models/MenuItems';
import {MatDialog} from '@angular/material/dialog';
import { DemandePieceComponent } from '../demande-piece/demande-piece.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
  
  ngOnInit(){
    this.createMenu();
  }
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    menu : MenuItems[]=[]
    liste : Map<String, MenuItems[]> = new Map<String, MenuItems[]>();
    note : boolean=false

  constructor(private breakpointObserver: BreakpointObserver, private service : EtudiantService,
    public dialog: MatDialog ) {
      
  }
  createMenu(){
    this.service.findAll().subscribe(value => 
      {
        this.menu = value
        let items : MenuItems[]=[];
    this.menu.forEach(element => {
      if (this.liste.get(element.categorie)==null){
          if (!element.cachee){
          items.push(element)
          this.liste.set(element.categorie,items);
          items=[];}
      }
      else {
        if (!element.cachee){
        items = this.liste.get(element.categorie)
        items.push(element);
        this.liste.set(element.categorie,items)
        items=[]}
      }
    });
  });

  }
  action(i:MenuItems ){
    if(i.titre =="demander pièces"){

    const dialogRef = this.dialog.open(DemandePieceComponent, {
      width: '500px',
      height:'350px'  
    });
    }
    if (i.titre == "réclamation Note"){
      this.note=true
    }

  }
  }


