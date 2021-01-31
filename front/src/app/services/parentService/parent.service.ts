import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `http://localhost:5000/api/`;

@Injectable({
  providedIn: 'root'
})
export class ParentService {

    constructor(private http:HttpClient) {}

    getParentTransactions() : Observable<any>{
      return this.http.get(`${baseUrl}parentTransactions`);
    }

    getParentPaidAmount() : Observable<any> {
      return this.http.get(`${baseUrl}getParentPaidAmount`);
    }
}
