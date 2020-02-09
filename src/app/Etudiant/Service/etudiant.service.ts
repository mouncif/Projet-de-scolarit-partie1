import { Injectable } from '@angular/core';
import { MenuItems } from 'src/app/Models/MenuItems';
import { HttpClient } from '@angular/common/http';
import { Piece } from 'src/app/Models/Piece';
import { Reclamation } from 'src/app/Models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url ="http://localhost:3000/items"
  constructor(private http : HttpClient) { }

findAllitems(){
 return this.http.get<MenuItems[]>(this.url);
}

getPiece(){
  this.url="http://localhost:3000/pieces"
  return this.http.get<Piece[]>(this.url);
}
addReclamation(reclamation ){
  this.url="http://localhost:3000/reclamations"
  return this.http.post<Reclamation>(this.url, reclamation);

}
}