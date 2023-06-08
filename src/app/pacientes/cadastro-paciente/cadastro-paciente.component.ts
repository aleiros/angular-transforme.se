import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  cadastroForm!: FormGroup;
  paciente!: Paciente;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {

    this.cadastroForm = new FormGroup({

      nome: new FormControl('', Validators.required),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmacaoSenha: new FormControl(''),

    });

  }

  adicionarPaciente() {
    //let valores = this.cadastroForm.value;
    //console.log(valores)

    this.paciente = Object.assign({}, this.paciente, this.cadastroForm.value)
    
    console.log(this.paciente)

    this.pacienteService.salvar(this.paciente).subscribe(clinicaSalva => {
      this.cadastroForm.reset()
    })
  }


}
