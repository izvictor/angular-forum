import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ApiService} from '../services/api.service';
import {LoggedService} from '../services/logged.service';
import {Router} from '@angular/router';

@Component({
  selector: 'f-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  users = [];
  logged: User;

  constructor(private apiService: ApiService,
              private loggedService: LoggedService,
              private router: Router) {
    apiService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
  }

  selected(user: User) {
    this.loggedService.logged = user;
    this.router.navigateByUrl('/topics?logged=' + user.id);
  }

}
