import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreportediariorecaudadoComponent } from './adminreportediariorecaudado.component';

describe('AdminreportediariorecaudadoComponent', () => {
  let component: AdminreportediariorecaudadoComponent;
  let fixture: ComponentFixture<AdminreportediariorecaudadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreportediariorecaudadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreportediariorecaudadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
