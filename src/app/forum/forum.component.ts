import {Component, OnInit} from '@angular/core';
import {User} from '../model/models';
import {LoggedService} from '../services/logged.service';

@Component({
  selector: 'f-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {


  constructor(private loggedService: LoggedService) {
  }

  ngOnInit() {
  }

  getLogged(): User {
    return this.loggedService.logged;

  }

  setLogged(user: User) {
    this.loggedService.logged = user;
  }


}
