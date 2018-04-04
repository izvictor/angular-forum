import {Injectable} from '@angular/core';
import {User} from '../model/models';

@Injectable()
export class LoggedService {

  logged: User;

  constructor() {
  }

}
