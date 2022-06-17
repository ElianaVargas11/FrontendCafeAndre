import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeropedidospagofacturaComponent } from './cajeropedidospagofactura.component';

describe('CajeropedidospagofacturaComponent', () => {
  let component: CajeropedidospagofacturaComponent;
  let fixture: ComponentFixture<CajeropedidospagofacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeropedidospagofacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeropedidospagofacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
