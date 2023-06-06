import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

constructor(private pacienteService: PacienteService) {}

  public pacientes!: Paciente[];

  ngOnInit(): void {

    this.listarPaciente()
  }

  listarPaciente() {

    this.pacienteService.listarPacientes().subscribe(pacientesRecebidas => {
      this.pacientes = pacientesRecebidas
      console.log(this.pacientes);
    },
    erro => console.log(erro)
    )
  }


  excluir(paciente: Paciente) {
    this.pacienteService.deletar(paciente.id).subscribe({
      next: () =>  this.listarPaciente()
    })
  }
}
