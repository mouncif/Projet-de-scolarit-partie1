import { Injectable } from '@angular/core';
import { MenuItems } from 'src/app/Models/MenuItems';
import { HttpClient } from '@angular/common/http';
import { Piece } from 'src/app/Models/Piece';
import { Reclamation } from 'src/app/Models/Reclamation';
import { ReclamationNoteComponent } from '../reclamation-note/reclamation-note.component';
import { Demande } from 'src/app/Models/Demande';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url =""
  constructor(private http : HttpClient) { }

findAllitems(){
  this.url="http://localhost:3000/items"
 return this.http.get<MenuItems[]>(this.url);
}

getPiece(){
  this.url="http://localhost:3000/pieces"
  return this.http.get<Piece[]>(this.url);
}
addReclamation(reclamation: Reclamation ){
  this.url="http://localhost:3000/reclamations"
  return this.http.post<Reclamation>(this.url, reclamation);

}
demanderPiece(demande: Demande){
  this.url="http://localhost:3000/demandes"
  return this.http.post<Demande>(this.url, demande);
}
getDemandes(){
  this.url="http://localhost:3000/demandes"
  return this.http.get<Demande[]>(this.url);
}
getReclamations(){
  this.url="http://localhost:3000/reclamations"
  return this.http.get<Reclamation[]>(this.url);
}
}
