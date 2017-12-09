import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';



@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body, {headers: this.setHeaders()})
      .catch(this.formatErrors)
      .map(res => res.json());
  }

  private setHeaders(): HttpHeaders {
    const headerConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new HttpHeaders(headerConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }


}
