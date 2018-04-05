import {Component, Input, OnInit} from '@angular/core';
import {LoggedService} from '../services/logged.service';
import {ApiService} from '../services/api.service';
import {User} from '../model/user';
import {Topic} from '../model/topic';
import {Comment} from '../model/comment';

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
      .subscribe(c => {
          this.topic.comments.push(c);
          this.newComment = '';
        }
      );
  }

  getTopicComments() {
    return this.topic.comments
      .filter(c => !this.commentFilter || c.content.toLowerCase().includes(this.commentFilter.toLowerCase()));
  }

  scoreUp(comment: Comment) {
    if (!comment.score) {
      comment.score = 0;
    }
    comment.score++;
    this.apiService.updateComment(comment).subscribe();
  }

  scoreDown(comment: Comment) {
    comment.score--;
    this.apiService.updateComment(comment).subscribe();
  }

  getCommentClass(comment: Comment) {
    if (comment.score) {
      if (comment.score > 0) {
        return 'text-success';
      } else {
        if (comment.score === 0) {
          return 'text-default';
        } else {
          return 'text-danger';
        }
      }
    }
    return 'text-default';
  }

}
