import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:52815/api/loan';
  }

  getAllLoans() {
    return this.http.get(`${this.url}/get-all-loans`);
  }

  addLoanRequest(body) {
    return this.http.post(`${this.url}/create-loan-request`, body);
  }
}
