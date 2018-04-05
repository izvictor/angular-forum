import {Component} from '@angular/core';
import {LoggedService} from './services/logged.service';
import {User} from './model/models';
import {Router} from '@angular/router';

@Component({
  selector: 'f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum';

  constructor(private loggedService: LoggedService,
              private router: Router) {

  }

  getLogged(): User {
    return this.loggedService.logged;
  }

  setLogged(user: User) {
    if (!user) {
      this.router.navigateByUrl('/');
    }
    this.loggedService.logged = user;
  }
}

