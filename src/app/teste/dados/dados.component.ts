import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  nome: String = "";
  sobrenome: String = "Medeiros";

  linkSite: String = "https://www.google.com";

  linkDaImagem: String = "";

  /*
  adicionaUm() {
    console.log("Clicou!")
  };
  */

  contador: number = 0;

  adicionaUm() {
    this.contador++;
  }

  menosUm() {
    this.contador--;
  }

  zerarContador() {
    this.contador = 0;
  }

  teclar(event: any) {
    console.log(event.target.value)
    this.nome = event.target.value
  }

}
