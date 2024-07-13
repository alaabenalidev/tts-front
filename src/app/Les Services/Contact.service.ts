import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankTransaction} from '../les classes/BankTransaction';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8081/contact';

  constructor(private http: HttpClient) {
  }

  saveRequest(status: number, message: string) {
    return this.http.post(`${this.apiUrl}/request`, {status, message});
  }

  getRequestUpdate() {
    return this.http.get<any[]>(`${this.apiUrl}/requests/modification`);
  }

  getRequestDelete() {
    return this.http.get<any[]>(`${this.apiUrl}/requests/delete`);
  }

  getRequestOther() {
    return this.http.get<any[]>(`${this.apiUrl}/requests/other`);
  }

  validationContact(item: { id: number, status: boolean }) {
    return this.http.post(`${this.apiUrl}/validation`, item)
  }
}
