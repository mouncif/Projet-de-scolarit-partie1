import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {IconsModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './Etudiant/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { DemandePieceComponent } from './Etudiant/demande-piece/demande-piece.component';
import { ReclamationNoteComponent } from './Etudiant/reclamation-note/reclamation-note.component';
import { ReclamationPedagogiqueComponent } from './Etudiant/reclamation-pedagogique/reclamation-pedagogique.component';
import { DatePipe } from '@angular/common';
import { EtudiantDemandesComponent } from './Etudiant/etudiant-demandes/etudiant-demandes.component';
import { EtudiantReclamationsComponent } from './Etudiant/etudiant-reclamations/etudiant-reclamations.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DemandePieceComponent,
    ReclamationNoteComponent,
    ReclamationPedagogiqueComponent,
    EtudiantDemandesComponent,
    EtudiantReclamationsComponent,

  ],
  
  entryComponents: [DemandePieceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    IconsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  exports:[
    AppComponent,
    SidebarComponent,
    DemandePieceComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
