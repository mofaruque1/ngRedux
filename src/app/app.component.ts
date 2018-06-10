import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppSate } from './app.state';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post:Observable<Post>;
  text: string; /// form input val

  constructor(private store:Store<AppSate>){
    this.post = this.store.select('post');
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }


  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
}
