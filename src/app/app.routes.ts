import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './empresa/contato/contato.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { DadosComponent } from './teste/dados/dados.component';
import { ObservadoraComponent } from './navegacao/observadora/observadora.component';
import { ListaClinicaComponent } from './clinicas/lista-clinica/lista-clinica.component';
import { ListaPacienteComponent } from './pacientes/lista-paciente/lista-paciente.component';
import { CadastroPacienteComponent } from './pacientes/cadastro-paciente/cadastro-paciente.component';

export const rotasConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'teste-dados', component: DadosComponent },
    { path: 'observadoras', component: ObservadoraComponent },
    { path: 'clinicas', component: ListaClinicaComponent },
    { path: 'pacientes', component: ListaPacienteComponent },
    { path: 'cadastro-paciente', component: CadastroPacienteComponent}
];