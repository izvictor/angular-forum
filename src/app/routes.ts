import {Routes} from '@angular/router';
import {ForumComponent} from './forum/forum.component';
import {TopicsViewComponent} from './topics-view/topics-view.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';

export const ROUTES: Routes = [
  { path: '', component: ForumComponent},
  { path: 'topics', component: TopicsViewComponent},
  { path: 'users', component: UserSelectionComponent }
];
