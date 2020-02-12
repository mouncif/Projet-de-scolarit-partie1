import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopavisComponent } from './popavis.component';

describe('PopavisComponent', () => {
  let component: PopavisComponent;
  let fixture: ComponentFixture<PopavisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopavisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
