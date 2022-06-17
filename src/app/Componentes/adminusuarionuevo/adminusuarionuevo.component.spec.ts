import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusuarionuevoComponent } from './adminusuarionuevo.component';

describe('AdminusuarionuevoComponent', () => {
  let component: AdminusuarionuevoComponent;
  let fixture: ComponentFixture<AdminusuarionuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusuarionuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusuarionuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
