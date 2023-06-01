import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClinicaComponent } from './lista-clinica.component';

describe('ListaClinicaComponent', () => {
  let component: ListaClinicaComponent;
  let fixture: ComponentFixture<ListaClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaClinicaComponent]
    });
    fixture = TestBed.createComponent(ListaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
