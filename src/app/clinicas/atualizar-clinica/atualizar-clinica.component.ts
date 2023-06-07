import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Clinica } from '../clinica';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-atualizar-clinica',
  templateUrl: './atualizar-clinica.component.html',
  styleUrls: ['./atualizar-clinica.component.css']
})
export class AtualizarClinicaComponent implements OnInit {

  atualizaForm!: FormGroup;
  clinica!: Clinica;
  clinicaAtualizada!: Clinica;

  constructor(private rota: ActivatedRoute, private clinicaService: ClinicaService) {}

  ngOnInit(): void {

    this.capturaValores()

    this.atualizaForm = new FormGroup({

      nome: new FormControl(''),
    });
  }

  capturaValores() {

    this.rota.params
    .subscribe( parametros => {

      this.clinicaService.listarPorId(parametros['id'])

        .subscribe(clinicaRecebida => {
          this.clinica = clinicaRecebida;
        })
    })

  }


  atualizarClinica() {

    this.clinicaAtualizada = Object.assign( {}, this.clinica, this.atualizaForm.value )
    let id = this.rota.snapshot.paramMap.get('id')!;
    let numero: number = parseInt(id);

    this.clinicaService.atualizarClinica(numero, this.clinicaAtualizada)
      .subscribe( novaClinica => {

        this.clinicaAtualizada = novaClinica;
        this.atualizaForm.reset();
      });

      console.log(this.clinicaAtualizada)


  }


}
