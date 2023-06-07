import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarClinicaComponent } from './atualizar-clinica.component';

describe('AtualizarClinicaComponent', () => {
  let component: AtualizarClinicaComponent;
  let fixture: ComponentFixture<AtualizarClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarClinicaComponent]
    });
    fixture = TestBed.createComponent(AtualizarClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
