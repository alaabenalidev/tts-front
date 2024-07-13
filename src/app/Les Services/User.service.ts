import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*addUser(user: User) {
    throw new Error('Method not implemented.');
  }*/
  private apiUrl = 'http://localhost:8081/auth';
  private apiUrlUser = 'http://localhost:8081/User';

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getRequestUsers() {
    return this.http.get<User[]>(`${this.apiUrlUser}/requests`);
  }

  submitRequestUser(user: number, status: boolean) {
    return this.http.post(`${this.apiUrlUser}/request/submit`, {user: user, status: status});
  }
}

/*deleteUser(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

updateUser(id: number, updatedUser: User): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, updatedUser);
}

getUser(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}
}
export { User };*/
