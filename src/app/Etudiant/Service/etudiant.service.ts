import { Injectable } from '@angular/core';
import { MenuItems } from 'src/app/Models/MenuItems';
import { HttpClient } from '@angular/common/http';
import { Piece } from 'src/app/Models/Piece';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url ="http://localhost:3000/items"
  constructor(private http : HttpClient) { }

findAll(){
 return this.http.get<MenuItems[]>(this.url);
}

getPiece(){
  this.url="http://localhost:3000/pieces"
  return this.http.get<Piece[]>(this.url);
}
}