import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `http://localhost:5000/api/`;

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http:HttpClient) {}

    getChildTransactions() : Observable<any>{
      return this.http.get(`${baseUrl}childTransactions`);
    }

    getChildSenderReceiver(parentid: string) : Observable<any> {
      const params = new HttpParams({
        fromObject: {
          query: parentid
        }
      });
      return this.http.get(`${baseUrl}getChildSenderReceiver`, {params: params});
    }
}
