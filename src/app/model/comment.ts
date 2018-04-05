import {User} from './user';

export interface Comment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?: number;
}
