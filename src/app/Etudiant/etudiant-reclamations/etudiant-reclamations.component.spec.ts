import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantReclamationsComponent } from './etudiant-reclamations.component';

describe('EtudiantReclamationsComponent', () => {
  let component: EtudiantReclamationsComponent;
  let fixture: ComponentFixture<EtudiantReclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantReclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
