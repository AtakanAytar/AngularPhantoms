import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Incident } from "./incident.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
       
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getIncidentList(): Observable<Incident[]> {
        return this.http.get<Incident[]>(this.baseUrl + "incident/list");
    }
}