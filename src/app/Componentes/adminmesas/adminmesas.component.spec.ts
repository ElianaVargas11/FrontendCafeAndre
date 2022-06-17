import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmesasComponent } from './adminmesas.component';

describe('AdminmesasComponent', () => {
  let component: AdminmesasComponent;
  let fixture: ComponentFixture<AdminmesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
