import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { ContatoComponent } from './empresa/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { DadosComponent } from './teste/dados/dados.component';

import { RouterModule } from '@angular/router';
import { rotasConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObservadoraComponent } from './navegacao/observadora/observadora.component';
import { ListaClinicaComponent } from './clinicas/lista-clinica/lista-clinica.component';
import { ClinicaService } from './clinicas/clinica.service';
import { HttpClientModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    FooterComponent,
    DadosComponent,
    ObservadoraComponent,
    ListaClinicaComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rotasConfig)],
    FormsModule,
    HttpClientModule
  ],
  /*fora*/
  providers: [
    ClinicaService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
