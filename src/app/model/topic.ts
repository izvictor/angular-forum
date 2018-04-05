import {User} from './user';
import {Comment} from './comment';

export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<Comment>;
  user: User;
  tags?: Array<String>;
}
