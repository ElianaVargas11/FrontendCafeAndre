import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmisdatosComponent } from './adminmisdatos.component';

describe('AdminmisdatosComponent', () => {
  let component: AdminmisdatosComponent;
  let fixture: ComponentFixture<AdminmisdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmisdatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmisdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
