import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Incident } from "./incident.model";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { User } from "./user.model";
import { ResponseModel } from "./response.model";
import { environment } from "src/environments/environment";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiurl;
       // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getIncidentList(): Observable<Incident[]> {
        return this.http.get<Incident[]>(this.baseUrl + "incident/list");
    }

    insertIncident(item: Incident): Observable<Incident> {
        return this.http.post<Incident>(this.baseUrl + "incident/add",
            item, this.getOptions()).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            }));
    }

    updateIncident(item: Incident): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(`${this.baseUrl}incident/edit/${item._id}`,
            item, this.getOptions()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteIncident(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.baseUrl}incident/delete/${id}`,
            this.getOptions()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // User endpoint of the API
    authenticate(username: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", {
            username: username, password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}