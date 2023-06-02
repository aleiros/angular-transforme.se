import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacienteComponent } from './lista-paciente.component';

describe('ListaPacienteComponent', () => {
  let component: ListaPacienteComponent;
  let fixture: ComponentFixture<ListaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPacienteComponent]
    });
    fixture = TestBed.createComponent(ListaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
