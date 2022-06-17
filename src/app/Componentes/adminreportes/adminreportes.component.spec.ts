import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreportesComponent } from './adminreportes.component';

describe('AdminreportesComponent', () => {
  let component: AdminreportesComponent;
  let fixture: ComponentFixture<AdminreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
