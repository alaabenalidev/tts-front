import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankAccount } from '../les classes/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private baseUrl = 'http://localhost:8081/bankaccount';

  constructor(private http: HttpClient) { }

  getBankAccountByUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/by-user`);
  }
}
export { BankAccount };

