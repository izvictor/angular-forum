import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable()
export class LoggedService {

  logged: User;

  constructor() {
  }

}
