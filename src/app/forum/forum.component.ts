import {Component, OnInit} from '@angular/core';
import {fakeUsers} from '../model/user-list';
import {User} from '../model/models';
import {topicList} from '../model/topic-list';

@Component({
  selector: 'f-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  logged: User;

  constructor() {
  }

  ngOnInit() {
  }


}
