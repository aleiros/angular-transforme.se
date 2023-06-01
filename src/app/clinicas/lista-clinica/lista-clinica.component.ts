import { Component, OnInit } from '@angular/core';
import { Clinica } from '../clinica';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-lista-clinica',
  templateUrl: './lista-clinica.component.html',
  styleUrls: ['./lista-clinica.component.css']
})
export class ListaClinicaComponent implements OnInit {

constructor(private clinicaService: ClinicaService) {}

  public clinicas!: Clinica[];

  ngOnInit(): void {
    this.clinicaService.listarClinicas().subscribe(clinicasRecebidas => {
      this.clinicas = clinicasRecebidas
      console.log(this.clinicas);
    },
    erro => console.log(erro)
    )
   
  }
}
@crossOriginIsolated(origin = "http://localhost:4200")