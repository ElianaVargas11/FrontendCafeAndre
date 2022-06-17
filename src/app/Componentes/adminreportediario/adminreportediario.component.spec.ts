import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreportediarioComponent } from './adminreportediario.component';

describe('AdminreportediarioComponent', () => {
  let component: AdminreportediarioComponent;
  let fixture: ComponentFixture<AdminreportediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreportediarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreportediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
