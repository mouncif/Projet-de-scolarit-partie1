import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDemandesComponent } from './etudiant-demandes.component';

describe('EtudiantDemandesComponent', () => {
  let component: EtudiantDemandesComponent;
  let fixture: ComponentFixture<EtudiantDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
