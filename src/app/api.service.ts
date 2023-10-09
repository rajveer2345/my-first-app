import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import { Router } from '@angular/router';
import {Location} from '@angular/common';
// const SERVER_URL = ;

export interface IApiParams {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    query?: any;
    body?: any;
    noAuth?: boolean;
}

@Injectable()
export class ApiService {
    constructor(
      public http: HttpClient,
      public r:Router,
      public _location: Location
      ) {
    }

    public request(params: IApiParams): Observable<any> {
        const {path, method, body, query} = params;
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        });
        return this.http.request(method, `${path}`, {body, params: query, headers});
    }



}
