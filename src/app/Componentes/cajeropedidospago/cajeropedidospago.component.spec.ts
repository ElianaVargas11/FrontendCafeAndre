import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeropedidospagoComponent } from './cajeropedidospago.component';

describe('CajeropedidospagoComponent', () => {
  let component: CajeropedidospagoComponent;
  let fixture: ComponentFixture<CajeropedidospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeropedidospagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeropedidospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
