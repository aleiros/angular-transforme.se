import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservadoraComponent } from './observadora.component';

describe('ObservadoraComponent', () => {
  let component: ObservadoraComponent;
  let fixture: ComponentFixture<ObservadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservadoraComponent]
    });
    fixture = TestBed.createComponent(ObservadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
