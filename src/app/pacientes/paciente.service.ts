import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Paciente } from "./Paciente";

@Injectable()
export class PacienteService {

    constructor(private http: HttpClient) { }


    private apiURL : string = 'http://localhost:8080/';

    listarClinicas() : Observable<Paciente[]> {
        return this.http.get<Paciente[]>(this.apiURL + "pacientes");
    }

}