import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroreportefechasComponent } from './cajeroreportefechas.component';

describe('CajeroreportefechasComponent', () => {
  let component: CajeroreportefechasComponent;
  let fixture: ComponentFixture<CajeroreportefechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajeroreportefechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroreportefechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
