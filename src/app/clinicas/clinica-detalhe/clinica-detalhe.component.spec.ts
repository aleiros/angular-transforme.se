import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaDetalheComponent } from './clinica-detalhe.component';

describe('ClinicaDetalheComponent', () => {
  let component: ClinicaDetalheComponent;
  let fixture: ComponentFixture<ClinicaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicaDetalheComponent]
    });
    fixture = TestBed.createComponent(ClinicaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
