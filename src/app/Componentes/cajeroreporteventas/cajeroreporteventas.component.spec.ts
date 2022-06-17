import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroreporteventasComponent } from './cajeroreporteventas.component';

describe('CajeroreporteventasComponent', () => {
  let component: CajeroreporteventasComponent;
  let fixture: ComponentFixture<CajeroreporteventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeroreporteventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroreporteventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
