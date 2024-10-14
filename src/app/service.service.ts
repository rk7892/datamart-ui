import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:3001/api/v1'; // Update this if your server is on a different port

  constructor(private http: HttpClient) { }

  addSignin(signin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, signin);
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}
