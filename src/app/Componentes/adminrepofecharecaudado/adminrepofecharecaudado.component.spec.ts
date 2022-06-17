import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrepofecharecaudadoComponent } from './adminrepofecharecaudado.component';

describe('AdminrepofecharecaudadoComponent', () => {
  let component: AdminrepofecharecaudadoComponent;
  let fixture: ComponentFixture<AdminrepofecharecaudadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrepofecharecaudadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrepofecharecaudadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
