import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Paciente } from "./paciente";

@Injectable()
export class PacienteService {

    constructor(private http: HttpClient) { }


    private apiURL : string = 'http://localhost:8080/';

    listarPacientes() : Observable<Paciente[]> {
        return this.http.get<Paciente[]>(this.apiURL + "pacientes");
    }

}