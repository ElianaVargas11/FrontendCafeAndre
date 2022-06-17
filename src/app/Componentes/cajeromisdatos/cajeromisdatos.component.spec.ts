import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeromisdatosComponent } from './cajeromisdatos.component';

describe('CajeromisdatosComponent', () => {
  let component: CajeromisdatosComponent;
  let fixture: ComponentFixture<CajeromisdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeromisdatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeromisdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
