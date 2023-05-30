import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observadora',
  templateUrl: './observadora.component.html',
  styleUrls: ['./observadora.component.css']
})
export class ObservadoraComponent implements OnInit {

  ngOnInit(): void {
    console.log("A soma é " + (1 + 1));
    this.minhaObservadora().subscribe(resultado => console.log(resultado));
  }

  minhaObservadora(): Observable<String> {

    return new Observable(subscribe => {
      subscribe.next("Olá!");
    })
  }
}
