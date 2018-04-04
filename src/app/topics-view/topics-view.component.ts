import {Component, Input, OnInit} from '@angular/core';
import {topicList} from '../model/topic-list';
import {Topic, User} from '../model/models';

@Component({
  selector: 'f-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  topics: Topic[] = topicList;

  @Input() loggedIn: User;

  constructor() {
    console.log('constructor', this.loggedIn);
  }

  ngOnInit() {
    console.log('onInit', this.loggedIn);
  }

}
