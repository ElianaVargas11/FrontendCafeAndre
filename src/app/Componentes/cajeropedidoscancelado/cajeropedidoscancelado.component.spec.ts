import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeropedidoscanceladoComponent } from './cajeropedidoscancelado.component';

describe('CajeropedidoscanceladoComponent', () => {
  let component: CajeropedidoscanceladoComponent;
  let fixture: ComponentFixture<CajeropedidoscanceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeropedidoscanceladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeropedidoscanceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
