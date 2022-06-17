import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoriasComponent } from './admincategorias.component';

describe('AdmincategoriasComponent', () => {
  let component: AdmincategoriasComponent;
  let fixture: ComponentFixture<AdmincategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
