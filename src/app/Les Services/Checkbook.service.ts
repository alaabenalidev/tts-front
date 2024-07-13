import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankTransaction} from '../les classes/BankTransaction';

@Injectable({
  providedIn: 'root'
})
export class CheckbookService {
  private apiUrl = 'http://localhost:8081/checkbook';

  constructor(private http: HttpClient) {
  }

  saveRequest(quantite: number) {
    return this.http.post(`${this.apiUrl}/request/` + quantite, {});
  }

  getRequestCheckbook() {
    return this.http.get<any[]>(`${this.apiUrl}/requests`);
  }

  validationCheckbook(item: { id: number, status: boolean }) {
    return this.http.post(`${this.apiUrl}/validation`, item)
  }
}
