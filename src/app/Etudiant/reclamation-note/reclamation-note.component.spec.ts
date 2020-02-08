import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationNoteComponent } from './reclamation-note.component';

describe('ReclamationNoteComponent', () => {
  let component: ReclamationNoteComponent;
  let fixture: ComponentFixture<ReclamationNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
