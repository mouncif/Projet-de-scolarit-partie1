import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePieceComponent } from './demande-piece.component';

describe('DemandePieceComponent', () => {
  let component: DemandePieceComponent;
  let fixture: ComponentFixture<DemandePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
