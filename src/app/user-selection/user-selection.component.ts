import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/models';
import {fakeUsers} from '../model/user-list';

@Component({
  selector: 'f-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  users = fakeUsers;
  logged: User;
  @Output() userSelected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selected(user: User) {
    this.userSelected.emit(user);
  }

}
