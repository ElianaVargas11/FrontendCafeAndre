import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoriaseditarComponent } from './admincategoriaseditar.component';

describe('AdmincategoriaseditarComponent', () => {
  let component: AdmincategoriaseditarComponent;
  let fixture: ComponentFixture<AdmincategoriaseditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincategoriaseditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategoriaseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
