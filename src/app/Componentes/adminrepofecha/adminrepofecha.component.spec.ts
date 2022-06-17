import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrepofechaComponent } from './adminrepofecha.component';

describe('AdminrepofechaComponent', () => {
  let component: AdminrepofechaComponent;
  let fixture: ComponentFixture<AdminrepofechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrepofechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrepofechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
