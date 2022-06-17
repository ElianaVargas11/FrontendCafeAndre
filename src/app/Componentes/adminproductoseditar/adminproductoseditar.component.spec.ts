import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductoseditarComponent } from './adminproductoseditar.component';

describe('AdminproductoseditarComponent', () => {
  let component: AdminproductoseditarComponent;
  let fixture: ComponentFixture<AdminproductoseditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproductoseditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
