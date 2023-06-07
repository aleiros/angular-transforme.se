import { Component, OnInit } from '@angular/core';
import { Clinica } from '../clinica';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-clinica-detalhe',
  templateUrl: './clinica-detalhe.component.html',
  styleUrls: ['./clinica-detalhe.component.css']
})
export class ClinicaDetalheComponent implements OnInit{

  clinica!: Clinica;

  constructor (private rota: ActivatedRoute, private clinicaService: ClinicaService) {}

  ngOnInit(): void {

  this.rota.params
    .subscribe( parametros => {

      this.clinicaService.listarPorId(parametros['id'])

        .subscribe(clinicaRecebida => {
          this.clinica = clinicaRecebida;
        })
    })

  }


}