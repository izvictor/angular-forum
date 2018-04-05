import {Component, Input, OnInit} from '@angular/core';
import {IComment, Topic, User} from '../model/models';
import {LoggedService} from '../services/logged.service';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'f-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  @Input() topic: Topic;

  newComment: string;

  commentFilter: string;

  constructor(private loggedService: LoggedService,
              private apiService: ApiService) {
  }

  ngOnInit() {
  }

  getLogged(): User {
    return this.loggedService.logged;
  }

  createNewComment() {
    this.apiService.createComment(this.newComment, this.topic)
      .subscribe(c => this.topic.comments.push(c));
  }

  scoreUp(comment: IComment) {
    if (!comment.score) {
      comment.score = 0;
    }
    comment.score++;
    this.apiService.updateComment(comment).subscribe();
  }

  scoreDown(comment: IComment) {
    if (comment.score > 0) {
      comment.score--;
    } else {
      comment.score = 0;
    }
    this.apiService.updateComment(comment).subscribe();

  }

}
