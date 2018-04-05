import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ForumComponent} from './forum/forum.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {TopicsViewComponent} from './topics-view/topics-view.component';
import {LoggedService} from './services/logged.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UserSelectionComponent,
    TopicsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoggedService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
