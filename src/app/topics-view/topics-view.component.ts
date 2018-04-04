import {Component, Input, OnInit} from '@angular/core';
import {topicList} from '../model/topic-list';
import {User} from '../model/models';

@Component({
  selector: 'f-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  topics = topicList;

  @Input() loggedIn: User;

  constructor() {
  }

  ngOnInit() {
  }

}
