import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationPedagogiqueComponent } from './reclamation-pedagogique.component';

describe('ReclamationPedagogiqueComponent', () => {
  let component: ReclamationPedagogiqueComponent;
  let fixture: ComponentFixture<ReclamationPedagogiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationPedagogiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationPedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
