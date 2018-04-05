import {Injectable} from '@angular/core';
import {Topic, User} from '../model/models';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  api: string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api + 'users');
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.api + 'topics');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.api + 'users/' + id);
  }

}
