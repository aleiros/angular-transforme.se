import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Clinica } from "./clinica";
import { Observable } from "rxjs";

@Injectable()
export class ClinicaService {

    constructor(private http: HttpClient) { }


    private apiURL : string = 'http://localhost:8081/';

    listarClinicas() : Observable<Clinica[]> {
        return this.http.get<Clinica[]>(this.apiURL + "clinicas");
    }

}