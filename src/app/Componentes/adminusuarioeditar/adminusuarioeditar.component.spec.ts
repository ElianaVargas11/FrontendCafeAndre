import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusuarioeditarComponent } from './adminusuarioeditar.component';

describe('AdminusuarioeditarComponent', () => {
  let component: AdminusuarioeditarComponent;
  let fixture: ComponentFixture<AdminusuarioeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusuarioeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusuarioeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
