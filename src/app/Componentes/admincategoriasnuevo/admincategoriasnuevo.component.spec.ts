import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoriasnuevoComponent } from './admincategoriasnuevo.component';

describe('AdmincategoriasnuevoComponent', () => {
  let component: AdmincategoriasnuevoComponent;
  let fixture: ComponentFixture<AdmincategoriasnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincategoriasnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategoriasnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
