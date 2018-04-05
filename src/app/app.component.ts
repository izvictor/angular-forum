import {Component} from '@angular/core';
import {LoggedService} from './services/logged.service';
import {User} from './model/models';

@Component({
  selector: 'f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum';

  constructor(private loggedService: LoggedService) {

  }

  getLogged(): User {
    return this.loggedService.logged;
  }

  setLogged(user: User) {
    return this.loggedService.logged = user;
  }
}

