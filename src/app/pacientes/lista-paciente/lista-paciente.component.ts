import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../Paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

constructor(private pacienteService: PacienteService) {}

  public pacientes!: Paciente[];

  ngOnInit(): void {
    this.pacienteService.listarClinicas().subscribe(pacientesRecebidas => {
      this.pacientes = pacientesRecebidas
      console.log(this.pacientes);
    },
    erro => console.log(erro)
    )
  }
}
