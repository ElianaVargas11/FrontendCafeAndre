import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductosnuevoComponent } from './adminproductosnuevo.component';

describe('AdminproductosnuevoComponent', () => {
  let component: AdminproductosnuevoComponent;
  let fixture: ComponentFixture<AdminproductosnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproductosnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductosnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
