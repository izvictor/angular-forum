import {Component, OnInit} from '@angular/core';
import {Topic, User} from '../model/models';
import {ApiService} from '../services/api.service';
import {LoggedService} from '../services/logged.service';

@Component({
  selector: 'f-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  topics: Topic[] = [];

  constructor(private apiService: ApiService, private loggedService: LoggedService) {
    console.log('constructor', loggedService.logged);
    apiService.getTopics().subscribe(topics => this.topics = topics);
  }

  ngOnInit() {
  }

  getLogged(): User {
    return this.loggedService.logged;
  }

}
