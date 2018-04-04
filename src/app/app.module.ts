import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { TopicsViewComponent } from './topics-view/topics-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UserSelectionComponent,
    TopicsViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
