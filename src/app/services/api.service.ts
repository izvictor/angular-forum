import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {LoggedService} from './logged.service';
import {User} from '../model/user';
import {Topic} from '../model/topic';
import {Comment} from '../model/comment';

@Injectable()
export class ApiService {

  api: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private loggedService: LoggedService) {
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

  createComment(content: string, toppic: Topic) {
    const comment: Comment = {
      id: -1,
      content,
      user: this.loggedService.logged
    };
    const url = this.api + 'comments/topic/' + toppic.id;
    return this.http.post<Comment>(url, comment);
  }

  updateComment(comment: Comment) {
    const url = this.api + 'comments/' + comment.id;
    return this.http.put<Comment>(url, comment);
  }

}
