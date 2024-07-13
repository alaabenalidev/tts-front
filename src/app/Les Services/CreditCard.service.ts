import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankTransaction } from '../les classes/BankTransaction';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private apiUrl = 'http://localhost:8081/credit-card';

  constructor(private http: HttpClient) { }
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      console.log("error saving the token")
      return new HttpHeaders({});
    }
  }

  requestCreditCard(creditCard: {annualIncome:number}) {
    return this.http.post(`${this.apiUrl}/request`, creditCard);
  }

  getRequestCreditCards() {
    return this.http.get<any[]>(`${this.apiUrl}/requests`);
  }

  validationCreditCard(item:{creditCard:number,status:boolean}) {
    return this.http.post(`${this.apiUrl}/validation`,item)
  }
}
