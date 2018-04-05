import {Component, OnInit} from '@angular/core';
import {Topic} from '../model/topic';
import {ApiService} from '../services/api.service';
import {LoggedService} from '../services/logged.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'f-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  topics: Topic[] = [];

  constructor(private apiService: ApiService,
              private loggedService: LoggedService,
              private route: ActivatedRoute) {
    console.log('constructor', loggedService.logged);
    apiService.getTopics().subscribe(topics => this.topics = topics);
    this.route.queryParams.subscribe(q => {
      console.log(q);
      // could test if already logged to avoid unnecessary request
      this.loadLoggedUser(q.logged);
    });
  }

  ngOnInit() {
  }

  loadLoggedUser(id: number) {
    if (!this.loggedService.logged) {
      this.apiService.getUser(id).subscribe(user => {
        this.loggedService.logged = user;
      });
    }
  }

}
