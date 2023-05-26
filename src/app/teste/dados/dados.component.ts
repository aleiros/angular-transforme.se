import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  nome: String = "Teste";

  linkSite: String = "https://www.google.com";

  linkDaImagem: String = "";

  /*
  adicionaUm() {
    console.log("Clicou!")
  };
  */

  contador: numero = 0;
  adicionaUm() {
    this.contador++;
  }

}
