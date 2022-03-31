import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable, of  } from "rxjs";
import { User } from "./user.model";
import { map, catchError } from "rxjs/operators";
import { ResponseModel } from "./response.model";

// const PROTOCOL = "http";
// const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string | undefined = ''

    constructor(private http: HttpClient) {
        this.baseUrl = 'https://phantomwebproject.herokuapp.com/';
        //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
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
