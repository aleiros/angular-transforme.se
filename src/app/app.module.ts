;
import { DadosComponent } from './teste/dados/dados.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { ContatoComponent } from './empresa/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';

import { RouterModule } from '@angular/router';
import { rotasConfig } from ;

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    FooterComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rotasConfig)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
