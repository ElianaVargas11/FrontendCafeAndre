import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroreportediarioComponent } from './cajeroreportediario.component';

describe('CajeroreportediarioComponent', () => {
  let component: CajeroreportediarioComponent;
  let fixture: ComponentFixture<CajeroreportediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeroreportediarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroreportediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
