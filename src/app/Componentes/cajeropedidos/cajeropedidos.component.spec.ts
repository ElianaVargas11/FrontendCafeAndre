import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeropedidosComponent } from './cajeropedidos.component';

describe('CajeropedidosComponent', () => {
  let component: CajeropedidosComponent;
  let fixture: ComponentFixture<CajeropedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeropedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeropedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
