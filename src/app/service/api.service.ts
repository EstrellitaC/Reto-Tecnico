import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private Apiimg = 'https://pixabay.com/api/';
  // private keyapiimg = '46705430-ed8897df221d0c9d4f28235b4';
  private Apipaises = 'https://countries.trevorblades.com/';

  constructor( private http: HttpClient ) { }

  getpaises (query:any):Observable<any> {
    const body = {
      query: query,
    };
    return this.http.post(this.Apipaises, body);
  }  
}
