import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Clinica } from "./clinica";
import { Observable } from "rxjs";

@Injectable()
export class ClinicaService {

    constructor(private http: HttpClient) { }


    private apiURL : string = 'http://localhost:8080/';

    listarClinicas() : Observable<Clinica[]> {
        return this.http.get<Clinica[]>(this.apiURL + "clinicas");
    }

    listarPorId(id: number) : Observable<Clinica> {

         // http://localhost:8080/clinicas/id
        return this.http.get<Clinica>(this.apiURL + "clinicas/" + id);
    }

    atualizarClinica(id: number, clinica: any) : Observable<Clinica> {
        return this.http.put<Clinica>(this.apiURL + "clinicas/" + id, clinica);
    }

}