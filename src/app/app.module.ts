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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DemandePieceComponent,
    ReclamationNoteComponent,
    ReclamationPedagogiqueComponent,

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
